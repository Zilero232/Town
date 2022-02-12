function SelectTree({show, toggle, togglePhoto}) {
  return (
    <div className="specifical-tree" style={{display: show ? 'block' : 'none'}}>
      <div className="specifical-tree__wrapper">
        <div className="specifical-tree__sitebar">
          <div className="specifical-tree__sitebar-times">
            <span>
              <img src="images/showball-icon.svg" alt="" />
            </span>
            зима
          </div>

          <div className="specifical-tree__sitebar-status">
            <div className="specifical-tree__sitebar-item specifical-tree__sitebar-water">
              <div className="specifical-tree__sitebar-item_left">
                <div className="specifical-tree__sitebar-item_title">вода</div>
                <div className="specifical-tree__sitebar-item_icon">
                  <img src="images/water-icon.svg" alt="" />
                </div>
              </div>

              <div className="specifical-tree__sitebar-item_right">
                <div className="specifical-tree__sitebar-item_lines">
                  <div className="specifical-tree__sitebar-item_line"></div>
                </div>
              </div>
            </div>

            <div className="specifical-tree__sitebar-item specifical-tree__sitebar-fertilizers">
              <div className="specifical-tree__sitebar-item_left">
                <div className="specifical-tree__sitebar-item_title">
                  удобрения
                </div>
                <div className="specifical-tree__sitebar-item_icon">
                  <img src="images/fertilizers-icon.svg" alt="" />
                </div>
              </div>

              <div className="specifical-tree__sitebar-item_right">
                <div className="specifical-tree__sitebar-item_lines">
                  <div className="specifical-tree__sitebar-item_line"></div>
                </div>
              </div>
            </div>

            <div className="specifical-tree__sitebar-item specifical-tree__sitebar-warm">
              <div className="specifical-tree__sitebar-item_left">
                <div className="specifical-tree__sitebar-item_title">Тепло</div>
                <div className="specifical-tree__sitebar-item_icon">
                  <img src="images/warm-icon.svg" alt="" />
                </div>
              </div>

              <div className="specifical-tree__sitebar-item_right">
                <div className="specifical-tree__sitebar-item_lines">
                  <div className="specifical-tree__sitebar-item_line"></div>
                </div>
              </div>
            </div>
          </div>

          <button className="specifical-tree__sitebar-photo" onClick={togglePhoto}>
            <div className="specifical-tree__sitebar-photo_icon">
              <img src="images/photo-icon.svg" alt="" />
            </div>
            <div className="specifical-tree__sitebar-photo_text">
              фотоальбом
            </div>
          </button>
        </div>

        <div className="specifical-tree__block">
          <h2 className="specifical-tree__block-name">нАЗВАНИЕ ДЕРЕВА</h2>
          <div className="specifical-tree__block-img">
            <img src="images/big-tree.png" alt="" />
          </div>
        </div>

        <div className="specifical-tree__decoration">
          <button className="specifical-tree__decoration-select">
            <div className="specifical-tree__decoration-icon">
              <img src="images/shrub-icon.svg" alt="" />
            </div>

            <div className="specifical-tree__decoration-text">УКРАШЕНИЯ</div>

            <div className="specifical-tree__decoration-arrow">
              <img src="images/arrow-white.svg" alt="" />
            </div>
          </button>

          <div className="specifical-tree__decoration-menu">
            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-1.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                хеллоуин
              </div>
            </div>

            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-2.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                новый год
              </div>
            </div>

            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-3.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                день города
              </div>
            </div>

            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-4.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                пасха
              </div>
            </div>

            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-5.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                любовь
              </div>
            </div>

            <div className="specifical-tree__decoration-menu_item">
              <div className="specifical-tree__decoration-menu_img">
                <img src="images/derocation/item-6.svg" alt="" />
              </div>
              <div className="specifical-tree__decoration-menu_name">НАБОР</div>
              <div className="specifical-tree__decoration-menu_title">
                день россии
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="specifical-tree__buttons">
        <button className="specifical-tree__buttons-btn specifical-tree__buttons-pour">
          полить
        </button>
        <button className="specifical-tree__buttons-btn  specifical-tree__buttons-fertilize">
          Удобрить
        </button>
        <button className="specifical-tree__buttons-btn  specifical-tree__buttons-warp">
          Согреть
        </button>
      </div>
    </div>
  );
}

export default SelectTree;
