const SensorSchema = {
    name: "sensorschema",
    properties: {
      _id: "string",
      _idUser:"string",
      type : "string",
      value: "int",
      timestamp:'date',
    },
    primaryKey: "_id",
  };
  
  
  export default SensorSchema;