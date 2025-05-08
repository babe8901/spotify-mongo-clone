import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album';
import { Model } from 'mongoose';
import { Song } from 'src/songs/schemas/song';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>,
  ) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.albumModel.create(createAlbumDto);
  }

  findAll() {
    return this.albumModel.find().populate('songs', null, Song.name);
  }

  findById(id: string) {
    return this.albumModel.findById(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.albumModel.updateOne({ _id: id }, updateAlbumDto);
  }

  delete(id: string) {
    return this.albumModel.deleteOne({ _id: id });
  }
}
