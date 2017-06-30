module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Buy some books"},
                {title: "Fix my computer"}
            ]);
        }
    };
};