export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

export type SortOrder = 'asc' | 'desc';

export interface SortParams {
  sortBy: string;
  sortOrder: SortOrder;
}