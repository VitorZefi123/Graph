class Category {
  static DIN277 = {
    NF2: "NF2",
    VF: "VF",
    NUF2 : "NUF2",
    NUF4: "NUF4",
    NF : "NF",
    NF7: "NF7",
    TF: "TF",
};


// Method to get category mappings
static getCategoryMapping() {
    return {
        DIN277: this.DIN277,
    };
}
    
      static getCategory(din, key) {
        if (this[din] && this[din][key]) {
          return this[din][key];
        } else {
          return null;
        }
      }
}

export default Category;
