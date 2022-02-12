/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  YMaps,
  Map,
  Polygon,
  Placemark,
  ListBox, 
  ListBoxItem,
} from "react-yandex-maps";
import { useState, useRef, useCallback } from "react";
import { ReactComponent as PaintIcon } from "../icons/paint.svg";
import { ReactComponent as CreatePointIcon } from "../icons/create-point.svg";
import { useModal } from "../hooks";

const defaultOptions = {
  fillColor: "#098A1B",
  fillOpacity: 0.35, 
  strokeColor: "#098A1B",
  strokeOpacity: 0.85,
  strokeWidth: 2,
};
 
const defaultLocations = [
  {
    data: "Сушанская 19",
    coords: [58.407509194058775, 33.90393506182081],
    polygonCoords: [
      [
        [58.408144885671106, 33.90247138581055],
        [58.40806365649362, 33.90281695740664],
        [58.40798805802585, 33.90314107133061],
        [58.4077749206317, 33.90374638383438],
        [58.40701245472559, 33.90377510340807],
        [58.40693868237883, 33.90444927591659],
        [58.40681986138186, 33.90512344842514],
        [58.407563191934564, 33.90512329510482],
        [58.407934851300716, 33.905080303100384],
        [58.408115058043144, 33.9039322409819],
        [58.408144885671106, 33.90247138581055],
      ],
    ],
  },
];

const iconsPlacemark = {
  treeAndBush: "/icons/1.svg",
  tree: "/icons/2.svg",
  bush: "/icons/3.svg",
};

const hints = {
  treeAndBush:
    "Кликните, чтобы выбрать данное место для посадки дерева или кустарника",
  tree: "Кликните, чтобы выбрать данное место для посадки дерева",
  bush: "Кликните, чтобы выбрать данное место для посадки кустарника",
};  

export const MapBlock = ({isAdmin = false}) => {
  const [, toggleModal] = useModal() 

  const handleClickIcon = () => {
    toggleModal('select-tree')
  }

  const clickOnMap = (e) => {
    if (settings.mode === "create-point") {
      setPlacemarks([...placemarks, { coords: e.get("coords"), type: "tree" }]);
        toggleModal('select-tree-admin')
    }
  };

  const [placemarks, setPlacemarks] = useState([
    {
        "coords": [
            58.40769448724277,
            33.903859959968365
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.40769448724277,
            33.90404771459939
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.407693079510906,
            33.904227422603405
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.40769589497459,
            33.904377626308246
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.40769448724277,
            33.90454392326716
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.4077001181697,
            33.904656576045774
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.407629731518384,
            33.903865324386395
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.4076255083148,
            33.904004799255155
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.407619877375936,
            33.90418182505015
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.40761565417118,
            33.90430788887385
        ],
        "type": "tree"
    },
    {
        "coords": [
            58.40761424643615,
            33.90445004595163
        ],
        "type": "tree"
    },
    { 
        "coords": [
            58.407608615495484,
            33.90461902511956
        ],
        "type": "tree"
    }
]);
  const yMaps = useRef();
  const polygonRef = useRef();
 
  const [settings, setSettings] = useState({ mode: "none" });
  const [locations, setLocations] = useState(defaultLocations);

  const handleChangeSettings = (mode) => {
    if (settings.mode === "paint")
      setLocations([
        ...locations,
        {
          data: "Тестовое имя",
          coords: [58.407509194058775, 33.90393506182081],
          polygonCoords: [...polygonRef.current.geometry.getCoordinates()],
        },
      ]);

    setSettings({
      ...settings,
      mode,
    });
  };

  const drawNewPolygon = (ref) => {
    ref.editor.startDrawing();
  };

  const mapPanTo = useCallback(
    (coordinates) => {
      yMaps.current && yMaps.current.panTo(coordinates);
    },
    [yMaps]
  );

  const initPaintPolygon = (ref) => {
    polygonRef.current = ref;
    drawNewPolygon(ref);
  };

  return (
    <>
      <YMaps>
        <Map
          width="100%"
          height="500px"
          defaultState={{
            center: [58.407509194058775, 33.90393506182081],
            zoom: 17,
            type: "yandex#hybrid",
          }}
          instanceRef={(instance) => (yMaps.current = instance)}
          modules={[
            "templateLayoutFactory",
            "layout.ImageWithContent",
            "geoObject.addon.editor",
          ]}
        >
          {isAdmin && <ul className="map-settings">
            <li>
              <a
                href="#"
                className="icon"
                data-active={settings.mode === "paint"}
                onClick={() =>
                  handleChangeSettings(
                    settings.mode !== "paint" ? "paint" : "none"
                  )
                }
              >
                <PaintIcon />
              </a>
              <a
                href="#"
                className="icon"
                data-active={settings.mode === "create-point"}
                onClick={() =>
                  handleChangeSettings(
                    settings.mode !== "create-point" ? "create-point" : "none"
                  )
                }
              >
                <CreatePointIcon />
              </a>
            </li>
          </ul>}
          {locations &&
            locations.length > 0 &&
            locations.map((location, index) => (
              <Polygon
                onClick={(e) => clickOnMap(e)}
                geometry={location.polygonCoords}
                options={defaultOptions}
                key={index}
              />
            ))}

          {settings && settings.mode === "paint" && (
            <Polygon
              instanceRef={(ref) => ref && initPaintPolygon(ref)}
              geometry={[]}
              options={{
                ...defaultOptions,
                editorDrawingCursor: "crosshair",
                editorMaxPoints: 20,
                draggable: true,
              }}
            />
          )}

          {placemarks &&
            placemarks.length > 0 &&
            placemarks.map((placemark, index) => (
              <Placemark
                geometry={placemark.coords}
                key={index}
                modules={["geoObject.addon.hint"]}
                onClick={handleClickIcon}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: iconsPlacemark[placemark.type],
                  iconImageSize: [28, 28],
                  iconImageOffset: [-14, -15],
                }}
                properties={{
                  hintContent: hints[placemark.type],
                }}
              />
            ))}
          <ListBox data={{ content: "Выбрать зону посадки" }}>
            {locations &&
              locations.length > 0 &&
              locations.map((location, index) => (
                <ListBoxItem
                  data={{ content: location.data }}
                  onClick={() => mapPanTo(location.coords)}
                  key={index}
                  options={{ selectOnClick: false }}
                />
              ))}
          </ListBox>
        </Map>
        {/* <Map
          defaultState={{
            center: [55.73, 37.9], 
            zoom: 10,
          }}
        >
          <Polygon
            geometry={[
              [
                [55.75, 37.8],
                [55.8, 37.9],
                // [55.75, 38.0],
                // [55.7, 38.0],
                // [55.7, 37.8],
              ],
              // [
              //   [55.75, 37.82], 
              //   [55.75, 37.98],
              //   [55.65, 37.9],
              // ],
            ]}
            options={{
              fillColor: "#00FF00",
              strokeColor: "#0000FF",
              opacity: 0.5,
              strokeWidth: 5,
              strokeStyle: "shortdash",
            }}
          />
        </Map> */}
      </YMaps>
    </>
  ); 
}
 