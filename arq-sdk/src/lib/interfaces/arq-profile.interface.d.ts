export type Permission = 'la.coor.incoming.read' | 'la.coor.incoming.write' | 'la.coor.outgoing.read' | 'la.coor.outgoing.write' | 'la.student.write' | 'la.student.read' | 'iia.default-data.read' | 'iia.default-data.write' | 'iia.read' | 'iia.write' | 'ou.read' | 'ou.write' | 'admin.switch' | 'test' | string;
export interface Profile {
    login: string;
    name: string;
    role: 'CONSULTA' | 'ADMIN' | 'INFORMATICO';
    permissions: Permission[];
    degrees: string[];
}
