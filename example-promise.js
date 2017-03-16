// function getTempCallback (location, callback){
// 	callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
function getTempPromise(location){
  return new Promise (function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    },1000);
  });
}

getTempPromise('Jogja').then(function(temp){
  console.log('Promise success', temp);
},function(err){
  console.log('Promise error!', err);
});

function addPromise (a, b){
  return new Promise (function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A & B need to be numbers');
    }
  });
};

addPromise(4,2).then(function(sum){
  console.log('Promise success and the result is: ', sum);
},function(err){
  console.log('Promise error!', err);
});
