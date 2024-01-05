import { request } from '@umijs/max';

/**
 * 根据 schema 生成
 * @param params
 */
export async function generateXmlBySchema(params: TableSchema) {
  return request<BaseResponse<GenerateVO>>('/xml/generate/schema', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}

/**
 * 根据 xml 获取 schema
 * @param params
 */
export async function getSchemaByXml(params: GenerateBySqlRequest) {
  return request<BaseResponse<TableSchema>>('/xml/get/schema', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}
