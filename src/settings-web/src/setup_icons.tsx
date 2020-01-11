import React from 'react';
import {registerIcons} from 'office-ui-fabric-react';
import {initializeIcons} from './icons/src';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Import SVG files for the icons here.
import FancyZonesSVG from './svg/fancy_zones.svg';
import PowerRenameSVG from './svg/power_rename.svg';
import ShortcutGuideSVG from './svg/shortcut_guide.svg';

export function setup_powertoys_icons(): void {
  //initializeIcons('icons/fonts/');
  initializeIcons();

  registerIcons({
    icons: {
      'pt-fancy-zones': ( <FancyZonesSVG /> ),
      'pt-power-rename': ( <PowerRenameSVG /> ),
      'pt-shortcut-guide': ( <ShortcutGuideSVG /> ),
      'pt-explorer-files-preview': ( <Icon iconName='CircleRing' /> )
    }
  });
}
