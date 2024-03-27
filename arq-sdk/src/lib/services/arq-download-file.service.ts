import { Injectable } from '@angular/core';
import { ArqFileConfig } from '../interfaces/arq-file-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ArqDownloadFileService {
  constructor() {}

  public textFileDownload(config: ArqFileConfig) {
    if (config) {
      config.action().subscribe((res: any) => {
        this.writeContents(res, `${config.name}.${config.type}`, config.contentType);
      });
    }
  }

  private writeContents(content: BlobPart, fileName: string, contentType: string) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
