class Category {
    static DIN277 = {
        NF2: "NF2",
        VF: "VF" 
      };
    
      static DIN123 = {
        NF3: "NF3",
        VH: "VH" 
      };
    
      static getCategoryMapping() {
        return {
          DIN277: this.DIN277,
          DIN123: this.DIN123
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
