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
        [HttpGet("[action]/{e}")]
        public void DeleteProduct1([FromRoute]int e)
        {
            
            _productData.DeleteProduct(e);
        }
        [HttpGet("[action]/{e}")]
        public ProductInventory UpdateProduct([FromRoute]int e)
        {
            
            ProductInventory prod = new ProductInventory();
            prod=_productData.Update(e);
            _productData.DeleteProduct(e);
            return prod;
        }
    }
}
