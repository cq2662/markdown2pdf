<script setup lang="ts">
import {
  useData,
  EducationalRequiredOptions,
  WorkAndResetTimeOptions,
  WorkEXPOptions
} from './hook'
import { getTagColor } from '@/utils'
import { recruits } from './recruits'

const { data, form, query, reset, pageNumChange } = useData()
</script>

<template>
  <div class="recruit content-card">
    <h6 class="mb-20" style="color: var(--strong-color)">
      PS: 需要添加岗位的可以联系作者 必须是真正招人的岗位 如果发现刷 KPI 将放入黑名单册公示
    </h6>
    <el-form :inline="true" :model="form">
      <el-form-item label="模糊搜索">
        <el-input v-model="form.keyword" placeholder="关键词搜索" clearable />
      </el-form-item>
      <el-form-item label="工作岗位">
        <el-input v-model="form.job" placeholder="岗位筛选" clearable />
      </el-form-item>
      <el-form-item label="学历要求">
        <el-select v-model="form.educational_required" placeholder="学历要求" clearable>
          <el-option
            v-for="(item, index) in EducationalRequiredOptions"
            :label="item"
            :value="item"
            :key="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="工作经验">
        <el-select v-model="form.type" placeholder="招聘类型" clearable>
          <el-option
            v-for="(item, index) in WorkEXPOptions"
            :label="item"
            :value="item"
            :key="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="公司标签">
        <el-select v-model="form.icu" placeholder="按标签筛选" clearable>
          <el-option
            v-for="(item, index) in WorkAndResetTimeOptions"
            :label="item"
            :value="item"
            :key="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button color="var(--theme)" @click="query">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="recruit-limit">
      <el-table :data="data" style="width: 100%">
        <el-table-column label="Logo" prop="logo">
          <template #default="{ row }">
            <img class="corporation_logo" :src="row.logo" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="公司名称" prop="corporation">
          <template #default="{ row }">
            <strong>{{ row.corporation }}</strong>
          </template>
        </el-table-column>
        <el-table-column label="岗位" prop="job" />
        <el-table-column label="工作经验" prop="type">
          <template #default="{ row }">
            <el-tag v-for="(t, index) in row.type" :type="getTagColor(index)" :key="index">{{
              t
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="学历要求" prop="educational_required">
          <template #default="{ row }">
            <el-tag
              v-for="(er, index) in row.educational_required"
              :type="getTagColor(index)"
              :key="index"
              round
              >{{ er }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="公司标签" prop="tags">
          <template #default="{ row }">
            <el-tag v-for="(t, index) in row.tags" :type="getTagColor(index)" :key="index">{{
              t
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" prop="endTime" />
        <el-table-column label="投递通道" prop="external_link">
          <template #default="{ row }">
            <div v-if="typeof row.external_link == 'string'" class="line-1">
              <el-link :href="row.external_link" target="_blank">
                {{ row.external_link }}
              </el-link>
            </div>
            <div v-else style="color: var(--strong-color)">
              <span>{{ row.external_link.app }}: </span>
              <span>{{ row.external_link.contact }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="remark" />
      </el-table>
      <el-pagination
        @update:current-page="pageNumChange"
        :page-size="form.pageSize"
        class="mt-20"
        layout="prev, pager, next, total"
        :total="recruits.length"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recruit {
  max-width: var(--max-width);
  margin: 20px auto;

  .corporation_logo {
    width: 70px;
  }

  :deep(.el-tag) {
    margin-top: 5px;
  }
}
</style>
