/**
 *  remove __text json
 * @function RemoveJsonTextAttribute
 */

const RemoveJsonTextAttribute = (value, parentElement) => {
    const keyNo = Object.keys(parentElement._parent).length;
    const keyName = Object.keys(parentElement._parent)[keyNo - 1];
    return parentElement._parent[keyName] = value;
};

module.exports = {
    RemoveJsonTextAttribute
}; 
