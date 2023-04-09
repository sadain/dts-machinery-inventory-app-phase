import React, { useRef, useEffect } from "react";
import "flatpickr/dist/flatpickr.min.css";
import Flatpickr from "flatpickr";

const PurchaseOrderFrom = () => {
  const datepickerRef = useRef(null);

  useEffect(() => {
    if (datepickerRef.current) {
      new Flatpickr(datepickerRef.current, {
        dateFormat: "d-m-Y",
        minDate: "today",
      });
    }
  }, []);

  return (
    <div className="mb-12">
      <div class="w-full mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="Supplier-id"
                >
                  Supplier ID
                </label>
                <div class="">
                  <select
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    id="SupplierId"
                  >
                    <option>1001</option>
                    <option>1002</option>
                    <option>1003</option>
                    <option>1004</option>
                    <option>1005</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="Invoice-no"
                >
                  Invoice Number
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ship-to-customer-id"
                  type="text"
                  placeholder="Enter Invoice Number"
                />
              </div>
            </div>
            </div>
            <div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="Invoice-date"
                >
                  Invoice Date
                </label>
                <input
                  class="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="invoice-no"
                  type="text"
                  placeholder="Select Invoice Date"
                  ref={datepickerRef}
                />
              </div>
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

export default PurchaseOrderFrom;
