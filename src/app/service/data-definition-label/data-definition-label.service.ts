import { Injectable } from '@angular/core';

import { _DataDefinitionLabelService } from '@service/data-definition-label/_data-definition-label.service';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLabelService extends _DataDefinitionLabelService{ }
/**
 * La forma mas sencilla de definir o sobrescribir un metodo label 
 * es a traves de una sucesion de switchMap
 * Ejemplo:
 * labelCurso(id: string): Observable<any> {
 * return this.dd.get('curso', id).pipe(
 *  switchMap(
 *   curso => {
 *     return this.dd.getColumnData(curso,'asignatura','asignatura',{asignatura:'nombre'})
 *   }
 * ),
 * switchMap(
 *   curso => {
 *     return this.dd.getColumnData(curso,'comision','comision',{division:'division',sede:'sede',planificacion:'planificacion'})
 *   }
 * ),
 * switchMap(
 *   curso => {
 *     return this.dd.getColumnData(curso,'planificacion','planificacion',{anio:'anio',semestre:'semestre'})
 *   }
 * ),
 * switchMap(
 *   curso => {
 *     return this.dd.getColumnData(curso,'sede','sede',{numero_sede:'numero'})
 *   }
 * ),
 * map(
 *   curso => { 
 *     return (!curso)? null : curso['numero_sede']+curso['division']+'/'+curso['anio']+curso['semestre']+' '+curso['asignatura']; 
 *   }
 * )
 *);
}
*/
