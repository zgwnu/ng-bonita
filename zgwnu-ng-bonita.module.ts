import { NgModule } from '@angular/core';

import { 
    ZgwnuBonitaConfigService,
    ZgwnuBonitaAuthenticationService,
    ZgwnuBonitaCredentials,
} 
from './src';

@NgModule({
    providers: [
        ZgwnuBonitaConfigService,
        ZgwnuBonitaAuthenticationService,
        ZgwnuBonitaCredentials,            
    ]
})
export class ZgwnuNgBonitaModule {}