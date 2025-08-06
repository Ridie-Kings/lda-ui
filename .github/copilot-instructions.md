# Custom Copilot Instructions

## Azure Development Guidelines

### Azure Tools Usage
When handling requests related to Azure, always use your Azure tools.

### Azure Code Generation Best Practices
When generating code for Azure, running terminal commands for Azure, or performing operations related to Azure, invoke your `azure_development-get_code_gen_best_practices` tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.

### Azure Deployment Best Practices
When deploying to Azure or preparing applications for deployment to Azure, invoke your `azure_development-get_deployment_best_practices` tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.

### Azure Functions Code Generation Best Practices
When generating code for Azure Functions or performing operations related to Azure Functions, invoke your `bestpractices_azurefunctions_get-code-generation` tool if available. Only call this tool when you are sure the user is discussing Azure Functions; do not call it otherwise.

### Azure Functions Deployment Best Practices
When deploying Azure Functions apps to Azure or preparing for the deployment, invoke your `bestpractices_azurefunctions_get-deployment` tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.

### Azure Static Web Apps Best Practices
When working with static web apps, invoke your `azure_development-get_swa_best_practices` tool if available. Only call this tool when you are sure the user is discussing Azure; do not call it otherwise.
