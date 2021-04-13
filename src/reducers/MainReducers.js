import {CHANGE_STATE_MAIN,  CHANGE_STATE_MERGE_MAIN,  RESET_STATE_MAIN} from '../actions/types'; 
  import initialState from './initialState';
  import update from 'react-addons-update';

  
  let sg,groups,size;
  export default function(state = initialState, action) {
    switch (action.type) {  
      case CHANGE_STATE_MAIN:
         sg = action.payload.name.includes('.');
        if(sg !==true){
          return update(state, { 
            [action.payload.name]: {$set: action.payload.value }
          })
        }else{
           groups = action.payload.name.split('.');
           size = groups.length - 1;
          if(size === 1){
            return update(state, { 
              [ groups[0]]: { 
                [ groups[1]]: {$set: action.payload.value }
              }
            })
          }// id groups[?]
          if(size === 2){
            return update(state, { 
              [ groups[0]]: { 
                [ groups[1]]: {
                  [groups[2]]: {$set: action.payload.value }
                }
              }
            })
          }// id groups[?]
          if(size === 3){
            return update(state, { 
              [groups[0]]: { 
                [groups[1]]: {
                  [groups[2]]: {
                    [groups[3]]: {$set: action.payload.value }
                  }
                }
              }
            })
          }// id groups[?]
          if(size === 4){
            return update(state, { 
              [groups[0]]: { 
                [groups[1]]: {
                  [groups[2]]: {
                    [groups[3]]: {
                      [groups[4]]: {$set: action.payload.value }
                    }
                  }
                }
              }
            })
          }// id groups[?]
          if(size === 5){
            return update(state, { 
              [groups[0]]: { 
                [groups[1]]: {
                  [groups[2]]: {
                    [groups[3]]: {
                      [groups[4]]: {
                      [groups[5]]: {$set: action.payload.value }
                      }
                    }
                  }
                }
              }
            })
          }// id groups[?]
          if(size === 6){
            return update(state, { 
              [groups[0]]: { 
                [groups[1]]: {
                  [groups[2]]: {
                    [groups[3]]: {
                      [groups[4]]: {
                      [groups[5]]: {
                        [groups[6]]: {$set: action.payload.value }
                      }
                      }
                    }
                  }
                }
              }
            })
          }// id groups[?]
        }
        break;
        case CHANGE_STATE_MERGE_MAIN:
        if(action.payload.name===null){
          return update(state,{$merge: action.payload.value })
        }
       sg = action.payload.name.includes('.');
      if(sg !==true){
        return update(state, { 
          [action.payload.name]: {$merge: action.payload.value }
        })
      }else{
         groups = action.payload.name.split('.');
         size = groups.length - 1;
        if(size === 1){
          return update(state, { 
            [ groups[0]]: { 
              [ groups[1]]: {$merge: action.payload.value }
            }
          })
        }// id groups[?]
        if(size === 2){
          return update(state, { 
            [ groups[0]]: { 
              [ groups[1]]: {
                [groups[2]]: {$merge: action.payload.value }
              }
            }
          })
        }// id groups[?]
        if(size === 3){
          return update(state, { 
            [groups[0]]: { 
              [groups[1]]: {
                [groups[2]]: {
                  [groups[3]]: {$merge: action.payload.value }
                }
              }
            }
          })
        }// id groups[?]
        if(size === 4){
          return update(state, { 
            [groups[0]]: { 
              [groups[1]]: {
                [groups[2]]: {
                  [groups[3]]: {
                    [groups[4]]: {$merge: action.payload.value }
                  }
                }
              }
            }
          })
        }// id groups[?]
        if(size === 5){
          return update(state, { 
            [groups[0]]: { 
              [groups[1]]: {
                [groups[2]]: {
                  [groups[3]]: {
                    [groups[4]]: {
                    [groups[5]]: {$merge: action.payload.value }
                    }
                  }
                }
              }
            }
          })
        }// id groups[?]
        if(size === 6){
          return update(state, { 
            [groups[0]]: { 
              [groups[1]]: {
                [groups[2]]: {
                  [groups[3]]: {
                    [groups[4]]: {
                    [groups[5]]: {
                      [groups[6]]: {$merge: action.payload.value }
                    }
                    }
                  }
                }
              }
            }
          })
        }// id groups[?]
      }
      break;
        case RESET_STATE_MAIN:
           sg = action.payload.includes('.');
          if(sg !== true){
            return update(state, { 
              [action.payload]: {$set: initialState[action.payload]}
            })
          }else{
             groups = action.payload.split('.');
             size = groups.length - 1;
            if(size === 1){
              return update(state, { 
                [groups[0]]: { 
                  [groups[1]]: {$set: initialState[groups[0]][groups[1]] }
                }
              })
            }// id groups[?]
            if(size === 2){
              return update(state, { 
                [groups[0]]: { 
                  [groups[1]]: {
                    [groups[2]]: { $set: initialState[groups[0]][groups[1]][groups[2]] }
                  }
                }
              })
            }// id groups[?]
            if(size === 3){
              return update(state, { 
                [groups[0]]: { 
                  [groups[1]]: {
                    [groups[2]]: {
                      [groups[3]]: { $set: initialState[groups[0]][groups[1]][groups[2]][groups[3]] }
                    }
                  }
                }
              })
            }// id groups[?]
          }
      default: 
        return state;
    }
  }  