import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';
import eyesPlugin from "@applitools/eyes-cypress"

const componentTestingConfig = {
  ...nxComponentTestingPreset(__filename)
}

export default eyesPlugin(defineConfig({
  component: componentTestingConfig,
}));
