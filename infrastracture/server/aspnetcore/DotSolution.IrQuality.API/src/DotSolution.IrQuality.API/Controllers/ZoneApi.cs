/*
 * Swagger I-rQuality
 *
 * This is a sample of IrQuality server api
 *
 * OpenAPI spec version: 0.1.0
 * Contact: an.pulvy@gmail
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using IO.Swagger.Attributes;

using Microsoft.AspNetCore.Authorization;
using IO.Swagger.Models;
using Swashbuckle.Swagger.Annotations;

namespace DotSolution.IrQuality.API.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class ZoneApiController : ControllerBase
    { 
        /// <summary>
        /// Add a new zone to monitor air quality
        /// </summary>
        /// <remarks>Add new zone to monitor air qiuality in that zone</remarks>
        /// <param name="body">Zone object to storage</param>
        /// <response code="405">Invalid input</response>
        [HttpPost]
        [Route("/v2/zone")]
        [ValidateModelState]
        [SwaggerOperation("AddZone")]
        public virtual IActionResult AddZone([FromBody]Zone body)
        { 
            //TODO: Uncomment the next line to return response 405 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            return StatusCode(405);

        }

        /// <summary>
        /// Get Zones
        /// </summary>
        /// <remarks>Get zones</remarks>
        /// <response code="404">NO ZONES HAS BEEN SAVED</response>
        [HttpGet]
        [Route("/v2/zone")]
        [ValidateModelState]
        [SwaggerOperation("GetZones")]
        public virtual IActionResult GetZones()
        { 
            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            return StatusCode(404);

        }
    }
}
