resource "azurerm_app_service_plan" "liatrio_backstage_app_service_plan" {
  name                = "liatrio-backstage-${var.environment}-service-plan"
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "Linux"
  reserved            = true

  sku {
    tier     = var.instance_tier
    size     = var.instance_size
    capacity = var.instance_capacity
  }
}

resource "azurerm_app_service" "liatrio_backstage_app_service" {
  name                    = "liatrio-backstage-${var.environment}"
  location                = var.location
  resource_group_name     = var.resource_group_name
  app_service_plan_id     = azurerm_app_service_plan.liatrio_backstage_app_service_plan.id
  https_only              = true
  client_affinity_enabled = true

  site_config {
    always_on        = "true"
    linux_fx_version = "DOCKER|${var.liatrio_backstage_image}"
  }

  identity {
    type = "SystemAssigned"
  }

  app_settings = {
    "APP_CONFIG_app_baseUrl"         = var.backstage_hostname
    "APP_CONFIG_backend_baseUrl"     = var.backstage_hostname
    "APP_CONFIG_backend_cors_origin" = var.backstage_hostname
    "WEBSITES_PORT" = var.backstage_port
  }
}
