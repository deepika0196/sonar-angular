import { Observable } from 'rxjs';

export interface ArqFileConfig {
  name: string;
  type: string;
  contentType: string;
  action: () => Observable<any>;
}
