import React from "react";

export const UploadImage = () => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [imageFile, setImageFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => setImageSrc(e.target.result);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageSrc && <img src={imageSrc} alt="product" width="100%" />}
    </div>
  );
};

export const gridProductImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.Picture}
      alt="order-item"
    />
  </div>
);



export const gridOrderStatus = (props) => (
  <button
    type="button"
    //   style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

//   {
//     "name": "string",
//     "model": "string",
//     "purpose": "string",
//     "picture": "string",
//     "Hsn": "string"
//   }

// {
//     "name": "string",
//     "address": "string",
//     "city": "string",
//     "stateId": 0,
//     "countryId": 0,
//     "phone": "string",
//     "fax": "string",
//     "postalCode": "string"
//   }

// {
//     "name": "string",
//     "address": "string",
//     "city": "string",
//     "stateId": 0,
//     "countryId": 0,
//     "phone": "string",
//     "gstIn": "string",
//     "iecNo": "string",
//     "pan": "string",
//     "postalCode": "string"
//   }
// {
//     "name": "string",
//     "address": "string",
//     "city": "string",
//     "stateId": 0,
//     "countryId": 0,
//     "phone": "string",
//     "fax": "string",
//     "postalCode": "string"
//   }
export const SupplierGrid = [

    {
      field: "name",
      headerText: "Supplier Name",
      width: "150"
    },
    {
      field: "address",
      headerText: "Address",
      width: "150"
    },
    {
      field: "city",
      headerText: "City",
      width: "150"
    },
    {
      field: "phone",
      headerText: "Phone",
      width: "150"
    },
    {
      field: "fax",
      headerText: "Fax",
      width: "150"
    },
    {
      field: "postalCode",
      headerText: "Postal Code",
      width: "150"
    },
  ];

export const CompaniesGrid = [

  {
    field: "name",
    headerText: "Company Name",
    width: "100"
  },
  {
    field: "address",
    headerText: "Address",
    width: "100"
  },
  {
    field: "city",
    headerText: "City",
    width: "100"
  },
  {
    field: "phone",
    headerText: "Phone",
    width: "100"
  },
  {
    field: "gstIn",
    headerText: "GSTIN",
    width: "100"
  },
  {
    field: "iecNo",
    headerText: "IECNo",
    width: "100"
  },
  {
    field: "pan",
    headerText: "PAN",
    width: "100"
  },
  {
    field: "postalCode",
    headerText: "Postal Code",
    width: "100"
  },
];

// companyid: 1,
//         accountname: "Account name 1",
//         bankName: "Bank 1",
//         bankBranch: "Test Branch 1",
//         accountNumber:"10AABCU9603R1Z2",
//         ifscCode:"0100000011",
//         swiftCode:"ABCTY1234D",
export const CompanyBankGrid = [

  {
    field: "companyid",
    headerText: "Company Id",
    width: "100"
  },
  {
    field: "accountname",
    headerText: "Account Name",
    width: "100"
  },
  {
    field: "bankName",
    headerText: "Bank Name",
    width: "100"
  },
  {
    field: "bankBranch",
    headerText: "Bank Branch",
    width: "100"
  },
  {
    field: "accountNumber",
    headerText: "Account Number",
    width: "100"
  },
  {
    field: "ifscCode",
    headerText: "IFSC Code",
    width: "100"
  },
  {
    field: "swiftCode",
    headerText: "Swift Code",
    width: "100"
  },
];
// quotationid: 01,
// productid: 01,
// quantity: 1,
// unitprice: 500,
// Totalprice: 500,
export const QuotationGrid = [

  {
    field: "quotationid",
    headerText: "Quotation Id",
    width: "100",
  },
  {
    field: "productid",
    headerText: "Product Id",
    width: "100",
  },
  {
    field: "quantity",
    headerText: "Quantity",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "unitprice",
    headerText: "Unit Price",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Totalprice",
    headerText: "Total Price",
    width: "100",
    editType:"numericedit"
  },
 
];
// PurchaseOrderId
// ProductId
// SupplierDescription
// Color
// Unit
// Quantity
// UnitPrice
// TotalPrice
export const PurchaseOrderGrid = [

  {
    field: "PurchaseOrderId",
    headerText: "Purchase Order Id",
    width: "100",
  },
  {
    field: "ProductId",
    headerText: "Product Id",
    width: "100",
  },
  {
    field: "SupplierDescription",
    headerText: "Supplier Description",
    width: "200",
  },
  {
    field: "Color",
    headerText: "Color",
    width: "100",
  },
  {
    field: "Unit",
    headerText: "Unit",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Quantity",
    headerText: "Quantity",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "UnitPrice",
    headerText: "Unit Price",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "TotalPrice",
    headerText: "Total Price",
    width: "100",
    editType:"numericedit"
  },
 
];

export const SalesInvoiceGrid = [

  {
    field: "SalesInvoiceId",
    headerText: "Sales Invoice Id",
    width: "100",
  },
  {
    field: "ProductId",
    headerText: "Product Id",
    width: "100",
  },
  {
    field: "Quantity",
    headerText: "Quantity",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Rate",
    headerText: "Rate",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Amount",
    headerText: "Amount",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Discount",
    headerText: "Discount",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "TaxableValue",
    headerText: "Taxable Value",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "CGSTRate",
    headerText: "CGST Rate",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "CGSTValue",
    headerText: "CGST Value",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "SGSTRate",
    headerText: "SGST Rate",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "SGSTValue",
    headerText: "SGST Value",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "IGSTRate",
    headerText: "IGST Rate",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "IGSTValue",
    headerText: "IGST Value",
    width: "100",
    editType:"numericedit"
  },
  {
    field: "Total",
    headerText: "Total",
    width: "100",
    editType:"numericedit"
  },
 
];
export const CustomerGrid = [

  {
    field: "name",
    headerText: "Customer Name",
    width: "150"
  },
  {
    field: "address",
    headerText: "Address",
    width: "150"
  },
  {
    field: "city",
    headerText: "City",
    width: "150"
  },
  {
    field: "phone",
    headerText: "Phone",
    width: "150"
  },
  {
    field: "fax",
    headerText: "Fax",
    width: "150"
  },
  {
    field: "postalCode",
    headerText: "Postal Code",
    width: "150"
  },
];
export const productsGrid = [
//   {
//     headerText: "Image",
//     template: gridProductImage,
//     width: "120",
//   },
  {
    field: "Name",
    headerText: "Product Name",
    width: "150",

  },
  {
    field: "Purpose",
    headerText: "Purpose",
    width: "150",

  },
  { field: "Model", headerText: "Model", width: "150", textAlign: "Center" },
  { field: "Hsn", headerText: "Hsn", width: "150", textAlign: "Center" },
];

export const productsData = [
  {
    Id: 1,
    Name: "Test Product",
    Model: "Test Model",
    Purpose: "Test Purpose",
    Picture:
      "http://dtsmachinery.co.in/wp-content/uploads/2020/02/DTS-1188-Auto-Conveyor-Type-Needle-Detector.jpg",
    Hsn: "1212121",
    CreatedBy: "1",
    CreatedAt: "2023-04-01T16:00:00.4223906",
  },
  {
    Id: 2,
    Name: "Test Product 2",
    Model: "Test Model 2",
    Purpose: "Test Purpose 2",
    Picture:
      "http://dtsmachinery.co.in/wp-content/uploads/2020/02/DTS-1188-Auto-Conveyor-Type-Needle-Detector.jpg",
    Hsn: "1212121",
    CreatedBy: "1",
    CreatedAt: "2023-04-01T16:00:00.4223906",
  },
  {
    Id: 3,
    Name: "Test Product 3",
    Model: "Test Model 3",
    Purpose: "Test Purpose 3",
    Picture:
      "http://dtsmachinery.co.in/wp-content/uploads/2020/02/DTS-1188-Auto-Conveyor-Type-Needle-Detector.jpg",
    Hsn: "1212121",
    Hsn: "1212121",
    CreatedBy: "1",
    CreatedAt: "2023-04-01T16:00:00.4223906",
  },
  {
    Id: 4,
    Name: "Test Product 4",
    Model: "Test Model 4",
    Purpose: "Test Purpose 4",
    Picture:
      "http://dtsmachinery.co.in/wp-content/uploads/2020/02/DTS-1188-Auto-Conveyor-Type-Needle-Detector.jpg",
    Hsn: "1212121",
    Hsn: "1212121",
    CreatedBy: "1",
    CreatedAt: "2023-04-01T16:00:00.4223906",
  },
  {
    Id: 5,
    Name: "Test Product 5",
    Model: "Test Model 5",
    Purpose: "Test Purpose 5",
    Picture:
      "http://dtsmachinery.co.in/wp-content/uploads/2020/02/DTS-1188-Auto-Conveyor-Type-Needle-Detector.jpg",
    Hsn: "1212121",
    Hsn: "1212121",
    CreatedBy: "1",
    CreatedAt: "2023-04-01T16:00:00.4223906",
  },
];

export const CustomerData = [
{
    name: "test customer",
    address: "123/ street test",
    city: "ambur",
    stateId: 0,
    countryId: 0,
    phone: "9211020220",
    fax: "4211020220",
    postalCode: "635810"
  },
{
    name: "test customer 2",
    address: "123/ street test",
    city: "ambur",
    stateId: 0,
    countryId: 0,
    phone: "9211020220",
    fax: "4211020220",
    postalCode: "635810"
  },
{
    name: "test customer 3",
    address: "123/ street test",
    city: "ambur",
    stateId: 0,
    countryId: 0,
    phone: "9211020220",
    fax: "4211020220",
    postalCode: "635810"
  },
{
    name: "test customer 4",
    address: "123/ street test",
    city: "ambur",
    stateId: 0,
    countryId: 0,
    phone: "9211020220",
    fax: "4211020220",
    postalCode: "635810"
  },
{
    name: "test customer 5",
    address: "123/ street test",
    city: "ambur",
    stateId: 0,
    countryId: 0,
    phone: "9211020220",
    fax: "4211020220",
    postalCode: "635810"
  },
];

// {
//     "name": "string",
//     "address": "string",
//     "city": "string",
//     "stateId": 0,
//     "countryId": 0,
//     "phone": "string",
//     "gstIn": "string",
//     "iecNo": "string",
//     "pan": "string",
//     "postalCode": "string"
//   }

export const CompaniesData = [
    {
        name: "test Companies name 1",
        address: "56/ 3rd street test",
        city: "Vellore",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        gstIn:"10AABCU9603R1Z2",
        iecNo:"0100000011",
        pan:"ABCTY1234D",
        postalCode: "635810"
      },
    {
        name: "test Companies name 2",
        address: "56/ 3rd street test",
        city: "Vellore",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        gstIn:"10AABCU9603R1Z2",
        iecNo:"0100000011",
        pan:"ABCTY1234D",
        postalCode: "635810"
      },
    {
        name: "test Companies name 3",
        address: "56/ 3rd street test",
        city: "Vellore",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        gstIn:"10AABCU9603R1Z2",
        iecNo:"0100000011",
        pan:"ABCTY1234D",
        postalCode: "635810"
      },
    {
        name: "test Companies name 4",
        address: "56/ 3rd street test",
        city: "Vellore",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        gstIn:"10AABCU9603R1Z2",
        iecNo:"0100000011",
        pan:"ABCTY1234D",
        postalCode: "635810"
      },
    {
        name: "test Companies name 5",
        address: "56/ 3rd street test",
        city: "Vellore",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        gstIn:"10AABCU9603R1Z2",
        iecNo:"0100000011",
        pan:"ABCTY1234D",
        postalCode: "635810"
      },
];
export const CompanyBankData = [
    {
        companyid: 1,
        accountname: "Account name 1",
        bankName: "Bank 1",
        bankBranch: "Test Branch 1",
        accountNumber:"10AABCU9603R1Z2",
        ifscCode:"0100000011",
        swiftCode:"ABCTY1234D",
      },
    {
        companyid: 2,
        accountname: "Account name 2",
        bankName: "Bank 2",
        bankBranch: "Test Branch 2",
        accountNumber:"10AABCU9603R1Z2",
        ifscCode:"0100000011",
        swiftCode:"ABCTY1234D",
      },
    {
        companyid: 3,
        accountname: "Account name 3",
        bankName: "Bank 3",
        bankBranch: "Test Branch 3",
        accountNumber:"10AABCU9603R1Z2",
        ifscCode:"0100000011",
        swiftCode:"ABCTY1234D",
      },
    {
        companyid: 4,
        accountname: "Account name 4",
        bankName: "Bank 4",
        bankBranch: "Test Branch 4",
        accountNumber:"10AABCU9603R1Z2",
        ifscCode:"0100000011",
        swiftCode:"ABCTY1234D",
      },
    {
        companyid: 5,
        accountname: "Account name 5",
        bankName: "Bank 5",
        bankBranch: "Test Branch 5",
        accountNumber:"10AABCU9603R1Z2",
        ifscCode:"0100000011",
        swiftCode:"ABCTY1234D",
      },
   
];

// {
//     "name": "string",
//     "address": "string",
//     "city": "string",
//     "stateId": 0,
//     "countryId": 0,
//     "phone": "string",
//     "fax": "string",
//     "postalCode": "string"
//   }


export const SupplierData = [
    {
        name: "test Supplier 1",
        address: "88/9 street test",
        city: "chennai",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        fax: "4211020220",
        postalCode: "635810"
      },
    {
        name: "test Supplier 2",
        address: "88/9 street test",
        city: "chennai",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        fax: "4211020220",
        postalCode: "635810"
      },
    {
        name: "test Supplier 3",
        address: "88/9 street test",
        city: "chennai",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        fax: "4211020220",
        postalCode: "635810"
      },
    {
        name: "test Supplier 4",
        address: "88/9 street test",
        city: "chennai",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        fax: "4211020220",
        postalCode: "635810"
      },
    {
        name: "test Supplier 5",
        address: "88/9 street test",
        city: "chennai",
        stateId: 0,
        countryId: 0,
        phone: "9211020220",
        fax: "4211020220",
        postalCode: "635810"
      },
];

export const QuotationData = [
  {
    quotationid: 111,
    productid: 31,
    quantity: 1,
    unitprice: 500,
    Totalprice: 500,
  },
  {
    quotationid: 222,
    productid: 32,
    quantity: 3,
    unitprice: 500,
    Totalprice: 1500,
  },
  {
    quotationid: 333,
    productid: 33,
    quantity: 4,
    unitprice: 500,
    Totalprice: 200,
  },
  {
    quotationid: 444,
    productid: 44,
    quantity: 2,
    unitprice: 500,
    Totalprice: 1000,
  },
    
];


export const SalesInvoiceData = [
  {
    SalesInvoiceId: 211,
    ProductId: 12,
    Quantity: 3,
    Rate: 500,
    Amount: 1000,
    Discount: 25,
    TaxableValue: 101,
    CGSTRate: 101,
    CGSTValue: 101,
    SGSTRate: 101,
    SGSTValue: 101,
    IGSTRate: 101,
    IGSTValue: 101,
    Total: 2000,
  },
  {
    SalesInvoiceId: 212,
    ProductId: 22,
    Quantity: 3,
    Rate: 500,
    Amount: 2000,
    Discount: 25,
    TaxableValue: 202,
    CGSTRate: 202,
    CGSTValue: 202,
    SGSTRate: 202,
    SGSTValue: 202,
    IGSTRate: 202,
    IGSTValue: 202,
    Total: 2000,
  },
  {
    SalesInvoiceId: 213,
    ProductId: 32,
    Quantity: 2,
    Rate: 500,
    Amount: 3000,
    Discount: 25,
    TaxableValue: 303,
    CGSTRate: 303,
    CGSTValue: 303,
    SGSTRate: 303,
    SGSTValue: 303,
    IGSTRate: 303,
    IGSTValue: 303,
    Total: 2000,
  },

    
];

// PurchaseOrderId
// ProductId
// SupplierDescription
// Color
// Unit
// Quantity
// UnitPrice
// TotalPrice

export const PurchaseOrderData = [
  {
    PurchaseOrderId: 123,
    ProductId: 11,
    SupplierDescription: "Testing Product Description",
    Color: "Black Color",
    Unit: 1,
    Quantity: 1,
    UnitPrice: 100,
    TotalPrice: 100,
  },
  {
    PurchaseOrderId: 321,
    ProductId: 12,
    SupplierDescription: "Testing Product Description",
    Color: "Black Color",
    Unit: 2,
    Quantity: 2,
    UnitPrice: 200,
    TotalPrice: 200,
  },
  {
    PurchaseOrderId: 213,
    ProductId: 13,
    SupplierDescription: "Testing Product Description",
    Color: "Black Color",
    Unit: 3,
    Quantity: 3,
    UnitPrice: 300,
    TotalPrice: 300,
  },
  {
    PurchaseOrderId: 132,
    ProductId: 14,
    SupplierDescription: "Testing Product Description",
    Color: "Black Color",
    Unit: 4,
    Quantity: 4,
    UnitPrice: 400,
    TotalPrice: 400,
  }
]