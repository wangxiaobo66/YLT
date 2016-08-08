/**
 * @file
 * @author jinguangguo
 * @date 2016/6/14
 */

export default function (requestPath) {

    var filePath = '.' + requestPath;
    var lastIndex = filePath.lastIndexOf('.');
    var directoryPath = filePath.substring(0, lastIndex);
    var fileType = filePath.substring(lastIndex + 1);
    var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, lastIndex);

    return {
        directoryPath: directoryPath,
        filePath: filePath,
        fileType: fileType,
        fileName: fileName
    };

};