// src/services/companyService.js
const API_URL = "http://localhost:5022/api/hello";

const CompanyProcessor = {
    // Get all companies
    getCompanies: async () => {
        try {
            debugger;
            const response = await fetch(API_URL);
            const data = await response.text()
            debugger;
            if (!response.ok) throw new Error("Failed to fetch companies");
            return data;
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    },

    // Get a single company by ID
    getCompanyById: async (companyId) => {
        try {
            const response = await fetch(`${API_URL}/${companyId}`);
            if (!response.ok) throw new Error("Company not found");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    },

    // Create a new company
    createCompany: async (company) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(company),
            });

            if (!response.ok) throw new Error("Error creating company");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    },
};

export default CompanyProcessor;
