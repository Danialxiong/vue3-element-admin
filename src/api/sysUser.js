import request from '@/utils/request'

const baseUrl = '/admin/system/sysUser'

// 获取用户列表
export const GetSysUserListByPage = (pageNum, pageSize, queryDto) => {
  return request({
    url: `${baseUrl}/findByPage/${pageNum}/${pageSize}`, // {pageNum}/{pageSize}是占位符
    method: 'get', // 请求方法
    params: queryDto, // 请求数据
  })
}

// 添加用户
export const SaveSysUser = sysUser => {
  return request({
    url: `${baseUrl}/saveSysUser`,
    method: 'post',
    data: sysUser,
  })
}

// 修改用户
export const UpdateSysUser = sysUser => {
  return request({
    url: `${baseUrl}/updateSysUser`,
    method: 'put',
    data: sysUser,
  })
}

// 删除用户
export const DeleteSysUser = userId => {
  return request({
    url: `${baseUrl}/deleteById/${userId}`,
    method: 'delete',
  })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = assginRoleVo => {
  return request({
    url: '/admin/system/sysUser/doAssign',
    method: 'post',
    data: assginRoleVo,
  })
}
