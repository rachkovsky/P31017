import { TestBed } from '@angular/core/testing';

import { BlogListResolverService } from './blog-list-resolver.service';

describe('BlogListResolverService', () => {
  let service: BlogListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
