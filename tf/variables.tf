variable "acr_subscription_id" {
  description = "Azure subscription to use for Liatrio Backstage resources"
  type        = string
}

variable "resource_group_name" {
  description = "Azure resource group for Liatrio Backstage"
  default     = "liatrio-backstage"
  type        = string
}

variable "location" {
  description = "Primary deployment region for Azure resources"
  default     = "Central US"
  type        = string
}

variable "environment" {
  description = "Environment for Liatrio Backstage deployment(nonprod, prod)"
  type        = string
}


variable "instance_tier" {
  description = "Service plan to use for App Serivce"
  default     = "Basic"
  type        = string
}

variable "instance_size" {
  description = "Instance size to use for App Serivce"
  default     = "B1"
  type        = string
}

variable "instance_capacity" {
  description = "Workers associated with App Service Plan"
  default     = "1"
  type        = string
}

variable "liatrio_backstage_image" {
  description = "Docker image to be used for Liatrio Backstage service"
  type        = string
}

variable "backstage_hostname" {
  description = "Hostname for Backstage Instance"
  type        = string
}

variable "backstage_port" {
  description = "Port for Backstage Instance"
  type        = string
  default     = "7000"
}
