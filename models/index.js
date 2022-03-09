import User from './User';
import Role from './Role';
import Method from './Method';
import Module from './Module';
import Usage from './Usage';

User.belongsTo(Role, { foreignKey: 'id_role' });
Role.hasMany(User, { foreignKey: 'id_role' });

Usage.belongsTo(Method, { foreignKey: 'id_method' });
Method.hasMany(Usage, { foreignKey: 'id_method' });

Usage.belongsTo(Module, { foreignKey: 'id_module' });
Module.hasMany(Usage, { foreignKey: 'id_module' });

Method.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Method, { foreignKey: 'id_user' });

export { User, Role, Method, Module, Usage };