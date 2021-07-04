import AsyncStorage from '@react-native-async-storage/async-storage';

/** set data in storage
* @param {String} key
* @param {Object} data
* @respone {Bool}
 */
const setData = async(key, data) => {
    try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
        console.error(e);
        return false;
  }
}

/** get data in storage
* @param {String} key
* @respone {Bool}
 */

const getData = async (key) =>{
try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue
  } catch(e) {
        console.error(e)
        return false
  }
}

/** remove data in storage
* @param {String} key
* @respone {Bool}
 */

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return key
  } catch(e) {
        console.error(e)
        return false
  }
}

export {
    setData,
    getData,
    removeData
}