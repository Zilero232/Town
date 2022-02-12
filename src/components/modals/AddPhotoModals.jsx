function addPhotoModals({ show, toggle }) {
  return (
    <div
      className="add-photo-modals"
      style={{ display: show ? "block" : "none" }}
    >
      <h2 className="modals__title">добавить фото</h2>
      <div className="add-photo-modals__wrapper">
        <div className="add-photo-modals__wrapper-item">
          <div
            className="add-photo-modals__wrapper-item_img"
            style={{ backgroundImage: `url(images/photo/item-1.jpg)` }}
          ></div>

          <button className="add-photo-modals__wrapper-item_plus">+</button>
        </div>

        <div className="add-photo-modals__wrapper-item plus">
          <div
            className="add-photo-modals__wrapper-item_img"
            style={{ backgroundImage: `url(images/photo/item-1.jpg)` }}
          ></div>

          <button className="add-photo-modals__wrapper-item_plus">+</button>
        </div>
      </div>
      <p className="add-photo-modals__wrapper-item_text">
        Перетащите фото или видео для загрузки
      </p>
      <h2 className="add-photo-modals__wrapper-item_title">
        добавить описание:
      </h2>
      <div className="add-photo-modals__wrapper-item_about">
        <div className="add-photo-modals__wrapper-item_left">
          <div className="add-photo-modals__wrapper-item_input">
            <input
              type="text"
              placeholder="Введите описание ПРИКРЕПЛЯЕМЫХ МАТЕРИАЛОВ"
            />
          </div>
        </div>

        <div className="add-photo-modals__wrapper-item_right">
          <button type="submit">
            <img src="images/submit-photo.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default addPhotoModals;
