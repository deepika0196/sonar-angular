// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ArqApiService,
  // ArqDatatableConfig,
  // ArqDependentInputs,
  // ArqHttpClient,
  // ArqList,
  // ArqPageableRequest,
  // ArqPageableResponse,
  // ArqSnackBarService,
  // ArqSpinnerService,
} from 'arq-sdk';
// import { Observable, Subject, delay, of } from 'rxjs';
// import { environment } from '../../environments/environment';

// const COLUMNS_SCHEMA_ES = [
//   {
//     key: 'nombre',
//     type: 'text',
//     label: 'Nombre Completo',
//     editInputSize: '100px',
//   },
//   {
//     key: 'pais',
//     type: 'select',
//     label: 'País',
//     data: [
//       { value: 'españa', description: 'España' },
//       { value: 'colombia', description: 'Colombia' },
//       { value: 'peru', description: 'Perú' },
//     ],
//     editInputSize: '80px',
//     isCreable: false,
//   },
//   {
//     key: 'cargo',
//     type: 'select',
//     label: 'Cargo',
//     data: [
//       { value: 'Jefe equipo', description: 'Jefe equipo' },
//       { value: 'Desarrollador Java', description: 'Desarrollador Java' },
//       { value: 'Desarrollador React', description: 'Desarrollador React' },
//       { value: 'Recursos Humanos', description: 'Recursos Humanos' },
//       { value: 'Marketing', description: 'Marketing' },
//     ],
//     editInputSize: '120px',
//     isEditable: false,
//   },
//   {
//     key: 'edad',
//     type: 'text',
//     label: 'Edad',
//     editInputSize: '70px',
//   },
//   {
//     key: 'fechaNacimiento',
//     type: 'date',
//     label: 'Fecha nacimiento',
//     editInputSize: '100px',
//   },
// ];

// const COLUMNS_SCHEMA_VA = [
//   {
//     key: 'nombre',
//     type: 'text',
//     label: 'Nom Complet',
//     editInputSize: '100px',
//   },
//   {
//     key: 'pais',
//     type: 'select',
//     label: 'País',
//     data: [
//       { value: 'españa', description: 'Espanya' },
//       { value: 'colombia', description: 'Colòmbia' },
//       { value: 'peru', description: 'Perú' },
//     ],
//     editInputSize: '80px',
//   },
//   {
//     key: 'cargo',
//     type: 'select',
//     label: 'Càrrec',
//     data: [
//       { value: 'Jefe equipo', description: 'Cap equip' },
//       { value: 'Desarrollador Java', description: 'Desenvolupador Java' },
//       { value: 'Desarrollador React', description: 'Desenvolupador React' },
//       { value: 'Recursos Humanos', description: 'Recursos Humans' },
//       { value: 'Marketing', description: 'Marketing' },
//     ],
//     editInputSize: '120px',
//   },
//   {
//     key: 'edad',
//     type: 'text',
//     label: 'Edat',
//     editInputSize: '70px',
//   },
//   {
//     key: 'fechaNacimiento',
//     type: 'date',
//     label: 'Data naixement',
//     editInputSize: '100px',
//   },
// ];

// const countries: any[] = [
//   {
//     value: '0149',
//     description: 'España',
//     descriptionV: 'Espanya',
//   },
//   {
//     value: '0015',
//     description: 'Colombia',
//     descriptionV: 'Colòmbia',
//   },
//   {
//     value: '0020',
//     description: 'Perú',
//     descriptionV: 'Perú',
//   },
//   {
//     value: '0402',
//     description: 'México',
//     descriptionV: 'Mèxic',
//   },
//   {
//     value: '0022',
//     description: 'Brasil',
//     descriptionV: 'Brasil',
//   },
//   {
//     value: '0038',
//     description: 'Italia',
//     descriptionV: 'Itàlia',
//   },
//   {
//     value: '2508',
//     description: 'EEUU',
//     descriptionV: 'EEUU',
//   },
//   {
//     value: '0018',
//     description: 'Chile',
//     descriptionV: 'Xile',
//   },
//   {
//     value: '0023',
//     description: 'Argentina',
//     descriptionV: 'Argentina',
//   },
// ];

// const municipalitiesEsp: any[] = [
//   {
//     codigoMunicipio: '12005',
//     denominacion: 'Alboraya',
//   },
//   {
//     codigoMunicipio: '12007',
//     denominacion: 'Benimodo',
//   },
//   {
//     codigoMunicipio: '12015',
//     denominacion: 'Benisuera',
//   },
//   {
//     codigoMunicipio: '12017',
//     denominacion: 'Buñol',
//   },
//   {
//     codigoMunicipio: '12025',
//     denominacion: 'Catarroja',
//   },
//   {
//     codigoMunicipio: '12045',
//     denominacion: 'Cheste',
//   },
//   {
//     codigoMunicipio: '12054',
//     denominacion: 'Cofrentes',
//   },
//   {
//     codigoMunicipio: '12023',
//     denominacion: 'Jalance',
//   },
//   {
//     codigoMunicipio: '12067',
//     denominacion: 'Manises',
//   },
// ];

// const municipalitiesVal: any[] = [
//   {
//     codigoMunicipio: '12005',
//     denominacion: 'Alboraia',
//   },
//   {
//     codigoMunicipio: '12007',
//     denominacion: 'Benimodo',
//   },
//   {
//     codigoMunicipio: '12015',
//     denominacion: 'Benisuera',
//   },
//   {
//     codigoMunicipio: '12017',
//     denominacion: 'Bunyol',
//   },
//   {
//     codigoMunicipio: '12025',
//     denominacion: 'Catarroja',
//   },
//   {
//     codigoMunicipio: '12045',
//     denominacion: 'Xest',
//   },
//   {
//     codigoMunicipio: '12054',
//     denominacion: 'Cofrents',
//   },
//   {
//     codigoMunicipio: '12023',
//     denominacion: 'Jalance',
//   },
//   {
//     codigoMunicipio: '12067',
//     denominacion: 'Manises',
//   },
// ];

// const genders = [
//   { value: '01', description: 'Femenino', descriptionV: 'Femení' },
//   { value: '02', description: 'Masculino', descriptionV: 'Masculí' },
//   { value: '03', description: 'Otro', descriptionV: 'Un altre' },
// ];

// const menuVal = [
//   {
//     id: '01',
//     permissionId: 'test',
//     label: 'inici',
//     icon: 'home',
//     routerLink: null,
//     permissions: [],
//     subItems: [],
//   },
//   {
//     id: '02',
//     permissionId: 'test',
//     label: 'Seus',
//     icon: 'pin_drop',
//     routerLink: null,
//     permissions: [],
//     subItems: [
//       {
//         id: '021',
//         permissionId: 'test',
//         label: 'Espanya',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//       {
//         id: '022',
//         permissionId: 'test',
//         label: 'Colòmbia',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//       {
//         id: '023',
//         permissionId: 'test',
//         label: 'Perú',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//     ],
//   },
//   {
//     id: '03',
//     permissionId: 'test',
//     label: 'Contacte',
//     icon: 'contacts',
//     routerLink: 'test',
//     permissions: [],
//   },
// ];

// const menuEsp = [
//   {
//     id: '01',
//     permissionId: 'test',
//     label: 'Inicio',
//     icon: 'home',
//     routerLink: null,
//     permissions: [],
//     subItems: [],
//   },
//   {
//     id: '02',
//     permissionId: 'test',
//     label: 'Sedes',
//     icon: 'pin_drop',
//     routerLink: null,
//     permissions: [],
//     subItems: [
//       {
//         id: '021',
//         permissionId: 'test',
//         label: 'España',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//       {
//         id: '022',
//         permissionId: 'test',
//         label: 'Colombia',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//       {
//         id: '023',
//         permissionId: 'test',
//         label: 'Perú',
//         icon: 'flag',
//         routerLink: null,
//         permissions: [],
//       },
//     ],
//   },
//   {
//     id: '03',
//     permissionId: 'test',
//     label: 'Contacto',
//     icon: 'contacts',
//     routerLink: 'test',
//     permissions: [],
//   },
// ];

// const languagesVal = [
//   {
//     id: '1',
//     code: 'es',
//     label: 'Castellà',
//   },
//   {
//     id: '2',
//     code: 'ca',
//     label: 'Valencià',
//   },
// ];

// const languagesEsp = [
//   {
//     id: '1',
//     code: 'es',
//     label: 'Castellano',
//   },
//   {
//     id: '2',
//     code: 'ca',
//     label: 'Valenciano',
//   },
// ];

// const schemaMock: any = {
//   type: 'es.gva.trabajo.aperct.dto.Empresas',
//   description: 'sssss',
//   title: 'Data',
//   properties: {
//     name: {
//       type: 'string',
//     },
//     position: {
//       type: 'string',
//     },
//     salary: {
//       type: 'string',
//     },
//     gender: {
//       type: 'string',
//     },
//     about: {
//       type: 'string',
//     },
//     pais: {
//       type: 'string',
//     },
//     birthday: {
//       type: 'string',
//     },
//     country: {
//       type: 'string',
//     },
//     municipalities: {
//       type: 'object',
//       properties: {
//         codigoMunicipio: {
//           type: 'string',
//         },
//         denominacion: {
//           type: 'string',
//         },
//       },
//     },
//     age: {
//       type: 'integer',
//       maximum: 200,
//       minimum: 10,
//     },
//   },
//   required: ['name', 'age', 'country', 'position'],
//   $schema: 'http://json-schema.org/draft-04/schema#',
//   empty: 'DataDto()',
// };

// const entidadMock: any = {
//   name: 'Juan',
//   position: 'Frontend',
//   age: 232,
//   salary: '10.220,98€',
//   gender: '03',
//   about: 'Pues eso',
//   birthday: '2023-04-07 12:15',
//   municipalities: {
//     codigoMunicipio: '12005',
//     denominacion: 'Alboraya',
//   },
//   country: {
//     id: '0149',
//     description: 'España',
//   },
// };

// const MOCK_DATA: any[] = [
//   {
//     id: 1,
//     nombre: 'John Smith',
//     pais: 'España',
//     cargo: 'Jefe equipo',
//     fechaNacimiento: '1984-05-05',
//     edad: 36,
//   },
//   {
//     id: 2,
//     nombre: 'Muhi Masri',
//     pais: 'Colombia',
//     cargo: 'Desarrollador Java',
//     fechaNacimiento: '1992-02-02',
//     edad: 28,
//   },
//   {
//     id: 3,
//     nombre: 'Peter Adams',
//     pais: 'Perú',
//     cargo: 'Recursos Humanos',
//     fechaNacimiento: '2000-01-01',
//     edad: 20,
//   },
//   {
//     id: 4,
//     nombre: 'Lora Bay',
//     pais: 'España',
//     cargo: 'Marketing',
//     fechaNacimiento: '1977-03-03',
//     edad: 43,
//   },
//   {
//     id: 5,
//     nombre: 'Ira an',
//     pais: 'Perú',
//     cargo: 'Jefe equipo',
//     fechaNacimiento: '1984-05-05',
//     edad: 36,
//   },
//   {
//     id: 6,
//     nombre: 'Ej Jrai',
//     pais: 'España',
//     cargo: 'Desarrollador React',
//     fechaNacimiento: '1992-02-02',
//     edad: 28,
//   },
//   {
//     id: 7,
//     nombre: 'Orka kar',
//     pais: 'Colombia',
//     cargo: 'Recursos Humanos',
//     fechaNacimiento: '2000-01-01',
//     edad: 20,
//   },
// ];

// const configInputs: ArqDependentInputs[] = [
//   {
//     id: '01',
//     first: true,
//     type: 'select',
//     label: 'Provincias',
//     next: '02',
//     control: 'provincia',
//     event: (str: string, numberOptions?: number | string) => {
//       return of([
//         { value: '03', description: 'Alicante', descriptionV: 'Alicante' },
//         { value: '12', description: 'Castellón', descriptionV: 'Castellón' },
//         { value: '46', description: 'Valencia', descriptionV: 'Valencia' },
//       ]);
//     },
//   },
//   {
//     id: '02',
//     first: false,
//     type: 'autocomplete',
//     label: 'Municipios',
//     control: 'municipio',
//     next: '03',
//     filterBack: false,
//     event: () => {
//       return (req: ArqPageableRequest) =>
//         of({
//           content: [
//             {
//               value: '0149',
//               description: 'Alicante',
//               descriptionV: 'Alicante',
//             },
//             { value: '0015', description: 'Adsubia', descriptionV: 'Adsubia' },
//             { value: '0020', description: 'Agost', descriptionV: 'Agost' },
//             {
//               value: '0402',
//               description: 'Castellón de la Plana',
//               descriptionV: 'Castellón de la Plana',
//             },
//             { value: '0022', description: 'Aín', descriptionV: 'Aín' },
//             {
//               value: '0038',
//               description: 'Albocàsser',
//               descriptionV: 'Albocàsser',
//             },
//             {
//               value: '2508',
//               description: 'Valencia',
//               descriptionV: 'Valencia',
//             },
//             { value: '0018', description: 'Ademuz', descriptionV: 'Ademuz' },
//             { value: '0023', description: 'Ador', descriptionV: 'Ador' },
//           ],
//         });
//     },
//   },
//   {
//     id: '03',
//     first: false,
//     type: 'select',
//     label: 'Distritos',
//     control: 'distrito',
//     next: null,
//     event: (str: string, numberOptions?: number | string) => {
//       return of([
//         {
//           value: '0149',
//           dist: '03',
//           description: 'Ciutat Vella',
//           descriptionV: 'Ciutat Vella',
//         },
//         {
//           value: '0015',
//           dst: '03',
//           description: 'Eixample',
//           descriptionV: 'Eixample',
//         },
//         {
//           value: '0020',
//           dist: '03',
//           description: 'Extramurs',
//           descriptionV: 'Extramurs',
//         },
//         {
//           value: '0402',
//           dist: '12',
//           description: 'Campanar',
//           descriptionV: 'Campanar',
//         },
//         {
//           value: '0022',
//           dist: '12',
//           description: 'Patraix',
//           descriptionV: 'Patraix',
//         },
//         {
//           value: '0038',
//           dit: '12',
//           description: 'Jesus',
//           descriptionV: 'Jesus',
//         },
//         {
//           value: '2508',
//           dist: '46',
//           description: 'El Pla del Real',
//           descriptionV: 'El Pla del Real',
//         },
//         {
//           value: '0018',
//           dist: '46',
//           description: 'Camins al Grau',
//           descriptionV: 'Camins al Grau',
//         },
//         {
//           value: '0023',
//           dist: '46',
//           description: 'Rascaña',
//           descriptionV: 'Rascaña',
//         },
//       ]);
//     },
//   },
// ];

// const menu_user = [
//   {
//     icon: 'exit_to_app',
//     text: 'Cerrar sesión',
//     event: (url: string) => {
//       //Incluir esta línea para que el botón cierre la sesión
//       //this.arqGvloginService.logout(url);
//     },
//   },
// ];
@Injectable({
  providedIn: 'root',
})
export class EjemploService extends ArqApiService {
  // constructor(
  //   protected override _spinner: ArqSpinnerService,
  //   protected override _http: HttpClient,
  //   protected override _snackbar: ArqSnackBarService
  // ) {
  //   super(_spinner, _http, _snackbar);
  //   this.nombreApp = environment.gvlogin.aplicacion;
  //   this.gvloginUrl = environment.gvlogin.url;
  //   this.enable = environment.gvlogin.enable;
  // }
  // public tableConfigEsp: ArqDatatableConfig = {
  //   filterType: 'hide',
  //   footerTableString: 'Total de registros',
  //   actions: [
  //     {
  //       icon: 'visibility',
  //       tooltip: 'Ver',
  //       action: (row: any) => alert('Has lanzado la funcion para ver'),
  //     },
  //     {
  //       icon: 'edit',
  //       tooltip: 'Editar',
  //       action: (row: any) => (row.isEdit = !row.isEdit),
  //     },
  //     {
  //       icon: 'delete',
  //       tooltip: 'Borrar',
  //       color: 'warn',
  //       action: (row: any) => console.log('delete', row),
  //     },
  //   ],
  //   actionsInContextMenu: false,
  //   newRowInActionsTH: true,
  //   editCallback: this.editRow,
  // };
  // public tableConfigVal: ArqDatatableConfig = {
  //   filterType: 'hide',
  //   actions: [
  //     {
  //       icon: 'visibility',
  //       tooltip: 'Veure',
  //       action: (row: any) => alert('Heu llançat la funció per veure'),
  //     },
  //     {
  //       icon: 'edit',
  //       tooltip: 'Edita',
  //       action: (row: any) => (row.isEdit = !row.isEdit),
  //     },
  //     {
  //       icon: 'delete',
  //       tooltip: 'Esborrar',
  //       color: 'warn',
  //       action: (row: any) => console.log('delete', row),
  //     },
  //   ],
  //   actionsInContextMenu: false,
  //   newRowInActionsTH: true,
  //   editCallback: this.editRow,
  // };
  // public getColumnsSchema(lang: any): Observable<any> {
  //   if (lang == 'ca') return of(COLUMNS_SCHEMA_VA);
  //   else return of(COLUMNS_SCHEMA_ES);
  // }
  // public getTableConfig(lang: string): Observable<any> {
  //   if (lang == 'ca') return of(this.tableConfigVal);
  //   else return of(this.tableConfigEsp);
  // }
  // public getCountries(): Observable<any> {
  //   return of(countries);
  // }
  // public getMunicipalities(lang: string): Observable<any> {
  //   if (lang == 'ca') return of(municipalitiesVal);
  //   else return of(municipalitiesEsp);
  // }
  // private editRow(row: any): void {
  //   console.log('edit', row);
  // }
  // public getGenders(): Observable<any> {
  //   return of(genders);
  // }
  // public getMenu(lang: string): Observable<any> {
  //   if (lang == 'ca') return of(menuVal);
  //   else return of(menuEsp);
  // }
  // public getLanguage(lang: string): Observable<any> {
  //   if (lang == 'ca') return of(languagesVal);
  //   else return of(languagesEsp);
  // }
  // override schema(): Observable<any> {
  //   //TODO PARA PRUEBAS, DEBERIA DE SER UNA BUSQUEDA EN BACK
  //   return of(schemaMock);
  // }
  // public getEntidad(): Observable<any> {
  //   //TODO PARA PRUEBAS, DEBERIA DE SER UNA BUSQUEDA EN BACK
  //   return of(entidadMock);
  // }
  // public sendData(f: any) {
  //   const objData = {
  //     id: MOCK_DATA.length + 1,
  //     nombre: f.name,
  //     pais: f.country.description,
  //     cargo: f.position,
  //     fechaNacimiento: f.birthday,
  //     edad: f.age,
  //     activo: true,
  //   };
  //   MOCK_DATA.push(objData);
  // }
  // public getInputsFromBack(): Observable<any> {
  //   return of(configInputs);
  // }
  // public loadData(
  //   request: ArqPageableRequest
  // ): Observable<ArqPageableResponse> {
  //   let data = JSON.parse(JSON.stringify(MOCK_DATA));
  //   // Filter Mocking
  //   if (request.filterCol) {
  //     if (request.filterCol === 'global')
  //       data = data.filter((el: any) =>
  //         el.nombre.toLowerCase().includes(request.filter)
  //       );
  //     else
  //       data = data.filter((el: any) => {
  //         let value = el[request.filterCol!];
  //         if (value && value.value) {
  //           return (
  //             el[request.filterCol!].description
  //               .toLowerCase()
  //               .includes(request.filter) ||
  //             el[request.filterCol!].descriptionV
  //               .toLowerCase()
  //               .includes(request.filter)
  //           );
  //         } else {
  //           return value.toLowerCase().includes(request.filter);
  //         }
  //       });
  //   }
  //   // Sort Mocking
  //   if (request.sort) {
  //     data.sort((a: any, b: any) => {
  //       if (a[request.sort!] < b[request.sort!]) return -1;
  //       else if (a[request.sort!] > b[request.sort!]) return 1;
  //       else return 0;
  //     });
  //     if (request.sort === 'desc') data.reverse();
  //   }
  //   // Page Mocking
  //   return of({
  //     content: data.slice(
  //       request.page * request.size,
  //       request.page * request.size + request.size
  //     ),
  //     size: data.length,
  //     pageable: {
  //       sort: {
  //         unsorted: false,
  //         sorted: true,
  //         empty: false,
  //       },
  //       offset: 0,
  //       pageNumber: 0,
  //       pageSize: 5,
  //       unpaged: false,
  //       paged: true,
  //     },
  //     last: false,
  //     totalPages: 2,
  //     totalElements: 10,
  //     number: 5,
  //     sort: {
  //       unsorted: false,
  //       sorted: true,
  //       empty: false,
  //     },
  //     first: true,
  //     numberOfElements: 5,
  //     empty: false,
  //   }).pipe(delay(2000));
  // }
  // public getFilterFromBack() {
  //   return (req: ArqPageableRequest) =>
  //     of({
  //       content: [
  //         {
  //           value: '0149',
  //           description: 'España',
  //           descriptionV: 'Espanya',
  //         },
  //         {
  //           value: '0015',
  //           description: 'Colombia',
  //           descriptionV: 'Colòmbia',
  //         },
  //         {
  //           value: '0020',
  //           description: 'Perú',
  //           descriptionV: 'Perú',
  //         },
  //         {
  //           value: '0402',
  //           description: 'México',
  //           descriptionV: 'Mèxic',
  //         },
  //         {
  //           value: '0022',
  //           description: 'Brasil',
  //           descriptionV: 'Brasil',
  //         },
  //         {
  //           value: '0038',
  //           description: 'Italia',
  //           descriptionV: 'Itàlia',
  //         },
  //         {
  //           value: '2508',
  //           description: 'EEUU',
  //           descriptionV: 'EEUU',
  //         },
  //         {
  //           value: '0018',
  //           description: 'Chile',
  //           descriptionV: 'Xile',
  //         },
  //         {
  //           value: '0023',
  //           description: 'Argentina',
  //           descriptionV: 'Argentina',
  //         },
  //       ],
  //     });
  // }
  // public getFilterMunicipios(filtro = '') {
  //   return this.getFilter(filtro, municipalitiesEsp);
  // }
  // public getFilterCountries(filtro = '') {
  //   return this.getFilter(filtro, countries);
  // }
  // public getFilter(filtro = '', data: ArqList[]) {
  //   let result = data;
  //   if (filtro) {
  //     result = result.filter((item: ArqList) => {
  //       return (
  //         item.value == filtro ||
  //         item.description.toLowerCase().includes(filtro) ||
  //         item.descriptionV.toLowerCase().includes(filtro)
  //       );
  //     });
  //   }
  //   return (req: ArqPageableRequest) =>
  //     of({
  //       content: result,
  //     });
  // }
  // public getUser(lang: string): Observable<any[]> {
  //   return of(menu_user);
  // }
  // /* ------------------------------ Petición back ----------------------------- */
  // public pruebaPeticionBack(){
  //   const _arqHttpClient: ArqHttpClient = new ArqHttpClient(this._http,environment);
  //   return _arqHttpClient.get<any>(
  //     //'http://demo8608251.mockable.io/api/prueba'
  //     environment.settings.hostDynamic + '/pruebaback/apipublica/v1/pruebas/test'
  //   );
  // }
  /* -------------------------------------------------------------------------- */
}
