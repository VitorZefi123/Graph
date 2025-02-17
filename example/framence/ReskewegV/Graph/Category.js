class Category {
    static DIN277 = {
        NF2: "NF2",
        VF: "VF" // Just a simplified label for VF
      };
    
      static DIN123 = {
        NF3: "NF3",
        VH: "VH" // Example for another DIN category
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
