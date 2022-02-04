
const datasheetSchema = '{ \
  "type": "object", \
  "title": "KITT4SME Digital Datasheet", \
  "properties": { \
    "information": { \
      "$ref": "#/information" \
    }, \
    "hardware_dependencies": { \
      "type": "array", \
      "title": "Component hardware dependencies", \
      "items": { \
        "$ref": "#/hardware_dependency" \
      } \
    }, \
    "software_dependencies": { \
      "type": "array", \
      "title": "Component software dependencies", \
      "items": { \
        "$ref": "#/software_dependency" \
      } \
    }, \
    "module_properties": { \
      "type": "object", \
      "title": "Critical issues that the AI module provides soltions for", \
      "$ref": "#/module_property" \
    }, \
    "public_endpoints": { \
      "type": "array", \
      "title": "Module public end points", \
      "items": { \
        "$ref": "#/public_endpoint" \
      } \
    } \
  }, \
  "information": { \
    "type": "object", \
    "title": "Component information", \
    "properties": { \
      "component_name": { \
        "type": "string", \
        "description": "Component name as it is found in the RAMP Marketplace" \
      }, \
      "component_uuid": { \
        "type": "string", \
        "description": "Component UUID hash that uniquely identifies component" \
      }, \
      "provider": { \
        "type": "string", \
        "description": "Link to the component provider information" \
      }, \
      "version": { \
        "type": "string", \
        "description": "Latest version number of the component" \
      }, \
      "description": { \
        "type": "string", \
        "description": "Description of the component outlining the indented use and high level features of the component" \
      }, \
      "datamodel": { \
        "type": "string", \
        "description": "Link to schema defining components datamodel" \
      }, \
      "multiuser_support": { \
          "type": "boolean", \
          "title": "Supports multiple users", \
          "default": false \
      }, \
      "multtenancy_support": { \
          "type": "boolean", \
          "title": "Supports multitenancy", \
          "default": false \
      }, \
      "dashboard": { \
        "type": "string", \
        "description": "Link to component dashboard" \
      } \
    } \
  }, \
  "hardware_dependency": { \
    "type": "object", \
    "title": "Hardware dependency", \
    "properties": { \
      "device_link": { \
        "type": "string", \
        "description": "Link to device resource that can be link to device data sheet or website further describing device" \
      }, \
      "device_text": { \
        "type": "string", \
        "description": "Description of  the device manufacturer and model" \
      }, \
      "mandatory": { \
        "type": "boolean", \
        "default": false, \
        "description": "Device is necessary for operation of the module" \
      } \
    } \
  }, \
  "software_dependency": { \
    "type": "object", \
    "title": "Software dependency", \
    "properties": { \
      "module_link": { \
        "type": "string", \
        "description": "Link to software resource that can be link to device data sheet or website further describing device" \
      }, \
      "module_text": { \
        "type": "string", \
        "description": "Description of  the software manufacturer and model" \
      }, \
      "mandatory": { \
        "type": "boolean", \
        "default": false, \
        "description": "Device is necessary for operation of the module" \
      } \
    } \
  }, \
  "module_property": { \
    "type": "object", \
    "title": "Component Critical Issues", \
     "description": "Does the component help with issues related to:", \
    "properties": \
      { \
        "machine_parameters": { \
          "type": "boolean", \
          "title": "wrong machine parameters", \
          "default": false \
        }, \
        "automatic_product_quality_ctrl": { \
          "type": "boolean", \
          "title": "inaccurate automatic product quality control system", \
          "default": false \
        }, \
        "stressful_manual_activities": { \
          "type": "boolean", \
          "title": "physically stressful manual activities", \
          "default": false \
        }, \
        "lowskil_manual_operations": { \
          "type": "boolean", \
          "title": "low-skilled operations in specific manual activities", \
          "default": false \
        }, \
        "stressful_cognitive_qualityctrl_activity": { \
          "type": "boolean", \
          "title": "stressful cognitive activity in the product quality control activity", \
          "default": false \
        }, \
        "lim_human_skills_in_qualityctrl": { \
          "type": "boolean", \
          "title": "limited human skills in the product quality control activity", \
          "default": false \
        }, \
        "handle_heavy_loads": { \
          "type": "boolean", \
          "title": "heavy loads to handle by operator", \
          "default": false \
        }, \
        "manual_task_repetitiveness": { \
          "type": "boolean", \
          "title": "high repetitiveness of manual tasks", \
          "default": false \
        }, \
        "working_environment_conditions": { \
          "type": "boolean", \
          "title": "unsustainability of the working environment conditions", \
          "default": false \
        }, \
        "robotic_systems_collision": { \
          "type": "boolean", \
          "title": "collisions with robotic systems", \
          "default": false \
        }, \
        "high_mental_effort_task": { \
          "type": "boolean", \
          "title": "activities that require high mental effort", \
          "default": false \
        }, \
        "predictive_maintenance_signal_events": { \
          "type": "boolean", \
          "title": "lack of predictive maintenance & Lack of signal for unexpected events", \
          "default": false \
        }, \
        "parameters_setup": { \
          "type": "boolean", \
          "title": "inaccurate setup of parameters", \
          "default": false \
        }, \
        "system_configuration_definition": { \
          "type": "boolean", \
          "title": "difficulty in defining the appropriate system configuration", \
          "default": false \
        }, \
        "machine_setup": { \
          "type": "boolean", \
          "title": "slow machine setup", \
          "default": false \
        }, \
        "machinery_performance_monitoring": { \
          "type": "boolean", \
          "title": "lack of systems/methods to monitor the machinery performance", \
          "default": false \
        } \
      } \
    }, \
  "public_endpoint": { \
    "type": "object", \
    "title": "Public API endpoints", \
    "properties": { \
      "endpoint": { \
        "type": "string", \
        "description": "Link to the module endpoint" \
      }, \
      "protocol": { \
        "type": "string", \
        "description": "Protocol that the endpoint expects like MQTT, REST, etc" \
      }, \
      "method": { \
        "type": "string", \
        "default": "", \
        "description": "For REST this would be one of GET, POST, DELETE, PUT, PATCH" \
      }, \
      "headers": { \
        "type": "array", \
        "items": { \
          "$ref": "#/headers" \
        } \
      }, \
      "payload": { \
        "type": "string", \
        "description": "Endpoint payload definition as JSON or other structured format" \
      } \
    } \
  }, \
  "headers": { \
    "type": "object", \
    "title": "HTML Header", \
    "properties": { \
      "key": { \
        "type": "string", \
        "description": "header key" \
      }, \
      "value": { \
        "type": "string", \
        "description": "header value" \
      } \
    } \
  } \
}';

const datasheetSchemaObject = JSON.parse(datasheetSchema);
export { datasheetSchemaObject };
