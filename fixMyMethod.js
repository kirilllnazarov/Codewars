function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function objMethod() {
      return myObject.objProperty;
    },
  };

  return myObject;
}
