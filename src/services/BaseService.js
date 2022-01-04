module.exports = class BaseService {
    getAll(where) {
        return this.model.find(where);
    };

    getById(id) {
        return this.model.findById(id);
    };

    add(item) {
        const data = new this.model(item);

        return data.save();
    };

    update() {
        return this.model.findOneAndUpdate(where, data, {
            new: true
        });
    };

    delete() {
        return this.model.findOneAndDelete(where);
    }
};