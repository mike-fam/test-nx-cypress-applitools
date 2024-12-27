import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';

const componentTestingConfig = {
  ...nxComponentTestingPreset(__filename)
}

export default defineConfig({
  component: componentTestingConfig,
});
