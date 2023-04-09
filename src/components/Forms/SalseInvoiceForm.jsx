import React from "react";

const SalseInvoiceForm = () => {
  return (
    <div className="mb-12">
      <div class="w-full mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="customer-id"
                >
                  Customer ID
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="customer-id"
                  type="text"
                  placeholder="Enter Customer ID"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="ship-to-customer-id"
                >
                  Ship To Customer ID
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ship-to-customer-id"
                  type="text"
                  placeholder="Enter Ship To Customer ID"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="invoice-no"
                >
                  Invoice No
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="invoice-no"
                  type="text"
                  placeholder="Enter Invoice No"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="invoice-date"
                >
                  Invoice Date
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="invoice-date"
                  type="text"
                  placeholder="Enter Invoice Date"
                />
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="state">
                  State
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state"
                  type="text"
                  placeholder="Enter State"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="state-code"
                >
                  State Code
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state-code"
                  type="text"
                  placeholder="Enter State Code"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="transportation-mode"
                >
                  Transportation Mode
                </label>
                <select
                  class="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="transportation-mode"
                  name="transportation-mode"
                >
                  <option value="">Select Transportation Mode</option>
                  <option value="Road">Road</option>
                  <option value="Rail">Rail</option>
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                </select>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="vehicle-no"
                >
                  Vehicle No
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="vehicle-no"
                  type="text"
                  placeholder="Enter Vehicle No"
                />
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="date-of-supply"
                >
                  Date of Supply
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date-of-supply"
                  type="text"
                  placeholder="Enter Date of Supply"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="place-of-supply"
                >
                  Place of Supply
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="place-of-supply"
                  type="text"
                  placeholder="Enter Place of Supply"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="po-number"
                >
                  PO Number
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="po-number"
                  type="text"
                  placeholder="Enter PO Number"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-theme-button hover:bg-theme-button-h text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalseInvoiceForm;
