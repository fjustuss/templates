import { Template } from "@easypanel/template-sdk";

const NCAToolkitTemplate: Template = {
  id: "nca-toolkit",
  name: "NCA Toolkit",
  description: "Template para instalar o NCA Toolkit via Docker",
  icon: "https://raw.githubusercontent.com/easypanel-io/templates/main/icons/n8n.png", // você pode trocar
  version: "1.0.0",
  inputs: [
    {
      name: "version",
      label: "Versão do NCA Toolkit",
      type: "string",
      default: "latest",
      required: true,
    },
    {
      name: "port",
      label: "Porta do Painel",
      type: "number",
      default: 8080,
      required: true,
    }
  ],
  generateDockerCompose: (inputs) => {
    const version = inputs.version || "latest";
    const port = inputs.port || 8080;

    return `
version: '3.8'
services:
  nca-toolkit:
    image: nca-toolkit:${version}
    ports:
      - "${port}:8080"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      - nca_data:/app/data
volumes:
  nca_data:
`;
  },
};

export default NCAToolkitTemplate;
