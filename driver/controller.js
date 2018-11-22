const Model = require('./model.js');
const DB = require('../config/db.js');

function getAllDriver() {
  return new Promise((resolve, reject) => {
    DB.Driver.find((objError, objResult) => {
      if (objError) {
        return reject(objError);
      }
      return resolve(objResult);
    });
  });
}

function createDriver(objDriver) {
  return new Promise((resolve, reject) => {
    const result = Joi.validate(objDriver, Model.schema);
    DB.Driver.insert(result.value, (objError, objResult) => {
      if (objError) {
        return reject(objError);
      }
      return resolve(objResult);
    });
  });
}

// function updateDriver(objDriver) {
//   return new Promise((resolve, reject) => {
//     const intDriverId = mongojs.ObjectId(objDriver._id);
//     const result = Joi.validate(objDriver, Model.schema);
//     DB.Driver.update({ _id: intDriverId }, (objError, objResult) => {
//       if (objError) {
//         return reject(objError);
//       }
//       return resolve()
//     }

//   })
//     {
//       name: req.body.name,
//       post: [
//         {
//           name: req.body.post.name,
//           description: req.body.post.description,
//           size: req.body.post.size,
//           image: {
//             fileName: req.body.post.fileName,
//             originalName: req.body.post.originalName,
//             path: req.body.post.path,
//             mimeType: req.body.post.mimeType,
//           },
//           location: [
//             {
//               name: req.body.post.name,
//               image:
//               {
//                 fileName: req.body.post.fileName,
//                 originalName: req.body.post.originalName,
//                 path: req.body.post.path,
//                 mimeType: req.body.post.mimeType,
//               },
//               options: [
//                 {
//                   fileName: req.body.post.fileName,
//                   originalName: req.body.post.originalName,
//                   path: req.body.post.path,
//                   type: req.body.post.type,
//                   mimeType: req.body.post.mimeType,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     }
//     );
// }

function deleteDriver(objDriver) {
  return new Promise((resolve, reject) => {
    const intDriverId = mongojs.ObjectId(objDriver._id);
    DB.Driver.remove({ _id: intDriverId }, (objError, objResult) => {
      if (objError) {
        return reject(objError);
      }
      return resolve(objResult);
    });
  });
}

const Export = module.exports;

Export.getAll = getAllDriver;
Export.create = createDriver;
// Export.putController = putController;
Export.delete = deleteDriver;
