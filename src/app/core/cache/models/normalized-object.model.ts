import { CacheableObject, TypedObject } from '../object-cache.reducer';
import { autoserialize } from 'cerialize';
import { ResourceType } from '../../shared/resource-type';
/**
 * An abstract model class for a NormalizedObject.
 */
export abstract class NormalizedObject<T extends TypedObject> implements CacheableObject, TypedObject {

  /**
   * The link to the rest endpoint where this object can be found
   */
  @autoserialize
  self: string;

  /**
   * A string representing the kind of DSpaceObject, e.g. community, item, …
   */
  @autoserialize
  type: ResourceType;

  @autoserialize
  _links: {
    [name: string]: string
  }
}
