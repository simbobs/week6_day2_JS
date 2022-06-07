const Park = function(name, price, dinosaurList){
    this.name = name;
    this.price = price;
    this.dinosaurList = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurList.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const dinosaurIndex = this.dinosaurList.indexOf(dinosaur);
    this.dinosaurList.splice(dinosaurIndex, 1);
}

// Park.prototype.checkHighestVisitorCount = function(dinosaurList){
//     for ( const dinosaur of dinosaurList){
//         return dinosaur.guestsAttractedPerDay().max();
//     }
// }
module.exports = Park