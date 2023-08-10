import { prisma } from ".";

const resolveAction = createAliasResolver({
  update: 'patch', // define the same rules for update & patch
  read: ['get', 'find'], // use 'read' as a equivalent for 'get' & 'find'
  delete: 'remove', // use 'delete' or 'remove'
});
// 3
export const _getDBPermissions = async (name:string) => {
  return prisma.permission?.findUnique({
    where: {
      name
    }
  });
};
// 4
const buildRulesFromPermissions = async (rules) => {
  rules = JSON.parse(JSON.stringify(rules));
  // console.log('26:rules', rules);
  const res = new Ability(rules);
  return await res;
};

const buildAbilityFromPermissions = async (rules) => {
  rules = JSON.parse(JSON.stringify(rules));
  // console.log('35:rules', await rules);

  const res = new AbilityBuilder(rules);
  return await res;
};
// 2
const defineRulesForRole = async (role) => {
  //3
  return _getDBPermissions(role)
    .then(
      // 4
      async (_permission) => await any([buildRulesFromPermissions(_permission.rules)])
    )
    .catch((error) => {
      console.error(error);
      return error;
    });
};
// 1
const defineRulesFor = async (user) => {
  // 2
  return any([defineRulesForRole(user.role)])
    .then(async (success) => {
      if (success) {
        // console.log('60:success', success);
        return success;
      }
    });
};

const defineAbilitiesFor = async (user) => {
  const rules = await defineRulesFor(user);
  return makeAbilityFromRules(await rules, { resolveAction });
};