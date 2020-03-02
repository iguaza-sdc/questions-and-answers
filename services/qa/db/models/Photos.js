const PhotosModels = (db, SQL) => {
  const Photos = db.define("photos", {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: SQL.TEXT,
      allowNull: false
    },
    thumbnail_url: {
      type: SQL.TEXT,
      allowNull: false
    }
  });
  return Photos;
};

export default PhotosModels;
