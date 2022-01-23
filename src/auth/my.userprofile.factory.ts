//In file 'my.userprofile.factory.ts'

import {UserProfileFactory} from '@loopback/authentication';
import {securityId, UserProfile} from '@loopback/security';

export const myUserProfileFactory: UserProfileFactory<any> = function (
  user: any,
): UserProfile {
  const userProfile = {[securityId]: user.id};
  return userProfile;
};
