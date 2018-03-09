using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models;
using test.Services;

namespace test.Controllers
{
    [Route("api/SampleData")]
    public class SampleDataController : Controller
    {
        public IProductData _productData;
        public SampleDataController(IProductData productData)
        {
            _productData = productData;
        }
        [HttpGet("[action]")]
        public IEnumerable<ProductInventory> GetCustomer()
        {
            return _productData.GetAll();
        }
        [HttpPost("[action]")]
        public IEnumerable<ProductInventory> AddCustomer([FromBody]ProductInventory model)
        {
            _productData.Add(model);
            return _productData.GetAll();
        }
    }
}
