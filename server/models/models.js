const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//comment to explain what schema does in mongoose

export const UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  }
  //name, password, docs? collaborators?
}
  
  
export const DocumentSchema = new Schema( {
  title: {
    type: String,
    required: true
  }
  //body, password, collaborators, link, owner, date, rawstate, lastsaved, history?????
}
