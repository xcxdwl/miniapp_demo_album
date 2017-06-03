module.exports = (options) => {
    return new Promise((resolve, reject) => {
        /* 
        options = Object.assign(options, {
            success(result) {
                if (result.statusCode === 200) {
                    resolve(result.data);
                } else {
                    reject(result);
                }
            },

            fail: reject,
        });

        wx.request(optaions);
        */
        resolve({
          code: 0,
          msg: "ok",
          data: ["../../data/1.jpg", "../../data/2.jpg", "../../data/3.jpg", "../../data/4.jpg"]
        })
    });
};