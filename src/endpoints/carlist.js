

export default {
    create: async function () {
        const BASE_URL = "​http://www.mocky.io/v2/5eb553df31000060006994a8";
        fetch('BASE_URL')
            .then(function (response) {
                console.log(response)
            })
            .then(function (myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                myImage.src = objectURL;
            });

    }
}