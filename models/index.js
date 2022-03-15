import User from './User';
import Role from './Role';
import Document from './Documents';
import Module from './Module';
import Usage from './Usage';
import Subcategory from './Subcategory';
import Category from './Category';

User.belongsTo(Role, { foreignKey: 'id_role' });
Role.hasMany(User, { foreignKey: 'id_role' });

Usage.belongsTo(Document, { foreignKey: 'id_document' });
Document.hasMany(Usage, { foreignKey: 'id_document' });

Usage.belongsTo(Module, { foreignKey: 'id_module' });
Module.hasMany(Usage, { foreignKey: 'id_module' });

Document.belongsTo(User, { foreignKey: 'id_user' });
User.hasMany(Document, { foreignKey: 'id_user' });

Document.belongsTo(Subcategory, { foreignKey: 'id_subcategory' });
Subcategory.hasMany(Document, { foreignKey: 'id_subcategory' });

Subcategory.belongsTo(Category, { foreignKey: 'id_category' });
Category.hasMany(Subcategory, { foreignKey: 'id_category' });




export { User, Role, Document, Module, Usage, Subcategory, Category };