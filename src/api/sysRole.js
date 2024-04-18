import request from '@/utils/request'

const baseUrl = '/admin/system/sysRole'

// 获取角色列表
export const GetSysRoleListByPage = (pageNum, pageSize, queryDto) => {
  return request({
    url: `${baseUrl}/findByPage/${pageNum}/${pageSize}`, // {pageNum}/{pageSize}是占位符
    method: 'post', // 请求方法
    data: queryDto, // 请求数据
  })
}

// 添加角色
export const SaveSysRole = sysRole => {
  return request({
    url: `${baseUrl}/saveSysRole`,
    method: 'post',
    data: sysRole,
  })
}

// 修改角色
export const UpdateSysRole = sysRole => {
  return request({
    url: `${baseUrl}/updateSysRole`,
    method: 'put',
    data: sysRole,
  })
}

// 删除角色
export const DeleteSysRole = roleId => {
  return request({
    url: `${baseUrl}/deleteById/${roleId}`,
    method: 'delete',
  })
}

// 获取角色列表
export const GetSysRoleList = () => {
  return request({
    url: `${baseUrl}/findAllRoles`,
    method: 'get',
  })
}

// 查询所有的角色数据
export const GetAllRoleList = userId => {
  return request({
    url: '/admin/system/sysRole/findAllRoles/' + userId,
    method: 'get',
  })
}

// 查询指定角色所对应的菜单id
export const GetSysRoleMenuIds = roleId => {
  return request({
    url: '/admin/system/sysRoleMenu/findSysRoleMenuByRoleId/' + roleId,
    method: 'get',
  })
}

// 根据角色分配菜单请求方法
export const DoAssignMenuIdToSysRole = assignMenuDto => {
  return request({
    url: '/admin/system/sysRoleMenu/doAssign',
    method: 'post',
    data: assignMenuDto,
  })
}
