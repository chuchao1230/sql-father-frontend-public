/**
 * 智能导入输入示例
 */
export const AUTO_INPUT_EXAMPLE = "id，用户名，创建时间，更新时间，is_deleted";

/**
 * JSON 输入示例
 */
export const JSON_INPUT_EXAMPLE = {
    dbName: 'test_db',
    tableName: 'user',
    tableComment: '用户表',
    fieldList: [
        {
            fieldName: 'username',
            comment: '用户名',
            fieldType: 'varchar(256)',
            mockType: '随机',
            mockParams: '人名',
            notNull: true,
            primaryKey: false,
            autoIncrement: false,
        },
        {
            fieldName: 'id',
            comment: '主键',
            fieldType: 'bigint',
            mockType: '固定',
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        {
            fieldName: 'create_time',
            comment: '创建时间',
            defaultValue: 'CURRENT_TIMESTAMP',
            fieldType: 'datetime',
            mockType: '固定',
            notNull: true,
            primaryKey: false,
            autoIncrement: false,
        },
        {
            fieldName: 'update_time',
            comment: '更新时间',
            defaultValue: 'CURRENT_TIMESTAMP',
            fieldType: 'datetime',
            mockType: '固定',
            notNull: true,
            primaryKey: false,
            autoIncrement: false,
            extra: 'on update CURRENT_TIMESTAMP',
        },
        {
            fieldName: 'is_deleted',
            comment: '是否删除(0-未删, 1-已删)',
            defaultValue: '0',
            fieldType: 'tinyint',
            mockType: '固定',
            notNull: true,
            primaryKey: false,
            autoIncrement: false,
        },
    ],
};

/**
 * SQL 输入示例
 */
export const SQL_INPUT_EXAMPLE =
    '-- 用户表\n' +
    'create table if not exists yupi_db.user\n' +
    '(\n' +
    "id bigint not null auto_increment comment '主键' primary key,\n" +
    "username varchar(256) not null comment '用户名',\n" +
    "create_time datetime default CURRENT_TIMESTAMP not null comment '创建时间',\n" +
    "update_time datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',\n" +
    "is_deleted tinyint default 0 not null comment '是否删除(0-未删, 1-已删)'\n" +
    ") comment '用户表';";

/**
 * xml 输入示例
 */
export const XML_INPUT_EXAMPLE =
    '<DATAHEAD>\n'+
    '<DATA_NAME>COL_D_LNF_AUTO_APRV_ABK_TAB</DATA_NAME>\n'+
    '<FIELDS>\n' +
    '<FIELD ID="1" TYPE="varchar(40)">id</FIELD>\n' +
    '<FIELD ID="2" TYPE="varchar(32)">cust_no</FIELD>\n' +
    '<FIELD ID="3" TYPE="string">cust_name</FIELD>\n' +
    '<FIELD ID="4" TYPE="varchar(500)">org_name</FIELD>\n' +
    '<FIELD ID="5" TYPE="varchar(50)">apply_time</FIELD>\n' +
    '<FIELD ID="6" TYPE="varchar(32)">product_no</FIELD>\n' +
    "</FIELDS>\n" +
    '</DATAHEAD>\n';
